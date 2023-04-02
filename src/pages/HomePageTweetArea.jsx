import { React, useEffect, useState,useContext,useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import moment from 'moment/moment';
import {clsx} from 'clsx';

import StyledUserAvatar from "components/StyledUserAvatar";
import StyledUserTitle from "components/StyledUserTitle";

import { ReactComponent as ReturnIcon } from 'assets/icon/returnArrow.svg';
import { ReactComponent as Reply } from 'assets/icon/reply.svg';
import { ReactComponent as LikeButton } from 'assets/icon/likeButton.svg';
import StyledReply from "components/StyledReply"
import StyledReplyModal from 'modals/StyledReplyModal';
import StyledToastContainer from "components/StyledToastContainer";

import { dislikeTweet, getTweet, likeTweet } from 'api/api';
import { UserInfoContext } from 'contexts/UserInfoContext';

const HomePageTweetArea = ({ className }) => {
  const userInfo = useContext(UserInfoContext)
  const { tweetId } = useParams()
  const [tweet, setTweet] = useState({})
  const [tweetUser, setTweetUser] = useState({})
  const [replies, setReplies] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [updatedLikeCounts, setUpdatedLikeCounts] = useState(0);
  const likeIconRef = useRef(null)
  const handleShowModal = () => setShowModal(true);
  
  //判斷是否快速雙擊按鍵用
  let lastClickTime = 0
  
  const handleLikeClick = (e) => {
    const button = e.currentTarget
		const tweetId = button.dataset.tweetid;
		const likeIcon = likeIconRef.current

		// 檢查上次事件觸發時間是否超過 500 毫秒
		if (Date.now() - lastClickTime < 500) {
			return;
		}
		
		// 記錄本次事件觸發時間
		lastClickTime = Date.now();

    if(likeIcon.matches('.liked')){
			const dislikeCurrentTweet = async() => {
				try{
          const res = await dislikeTweet(tweetId)
					if(res){
						likeIcon.classList.toggle('liked')
						setUpdatedLikeCounts(n=>n-1)
					}
				}catch(error){
					console.error(error)
				}
			}
			dislikeCurrentTweet()
		}else{
			const likeCurrentTweet = async() => {
				try{
				const res = await likeTweet(tweetId)
				if(res){
					likeIcon.classList.toggle('liked')
					setUpdatedLikeCounts(n=>n+1)
				}
				}catch(error){
				console.error(error)
				}
			}
			likeCurrentTweet();
		};
	}

  useEffect(()=>{
    const getCurrentTweet = async(id) => {
      try{
        const res = await getTweet(id);
        setTweet(res);
        setTweetUser(res.User);
        setReplies(res.Replies);
        setUpdatedLikeCounts(res.likeCounts);
      }catch(error){
        console.error(error)
      }
    }
    getCurrentTweet(tweetId)
  },[tweetId])
  

  return(
    <div className={className}>
      <div className='main-header'>
        <Link to="#" onClick={() => { window.history.back() }}><ReturnIcon className="return-icon" /></Link>
        <h2>推文</h2>
      </div>
      <hr className='main-header-line' />
      <div className="main-tweet">
        <div className="user-title">
          <StyledUserAvatar userId={tweetUser.id} userAvatar={tweetUser.avatar} />
          <StyledUserTitle className='user-info' columnArrange userId={tweetUser.id} userName={tweetUser.name} userAccount={tweetUser.account}   />
        </div>
        <div className="tweet-content">
          {tweet.description} 
        </div>
        <div className="tweet-time">
          {moment(new Date(tweet.createdAt)).format('a h:mm・YYYY年MM月DD日').replace('am', '上午').replace('pm', '下午')}
        </div>
        <hr/>
        <div className="reply-like-count">
          <div className="count">
            {tweet.replyCounts}<span> 回覆</span>
          </div>
          <div className="count">
            {updatedLikeCounts}<span> 喜歡次數</span>
          </div>
        </div>
        <hr />
        
        <div className="reply-like-icon">
          <Reply className='icon' fill='#6C757D' height='24px' onClick={handleShowModal}/>
          <StyledReplyModal
            id={tweetId}
            tweetUserId={tweetUser.id} 
            tweetUserAvatar={tweetUser.avatar}
            tweetUserName={tweetUser.name}
            tweetUserAccount={tweetUser.account}
            tweetTime={tweet.createdAt}
            tweetDescription={tweet.description}
            userId={userInfo.id}
            userAvatar={userInfo.avatar} 
            show={showModal} 
            setShow={setShowModal} 
          />
          <LikeButton data-tweetid={tweetId} ref={likeIconRef} className={clsx('icon',{liked: tweet.currentUserLikes})} fill='none' stroke='#6C757D' strokeWidth='2px' height='24px' onClick={handleLikeClick}/>
        </div>
      </div>
      <hr className="main-header-line"/>
      <ul className="reply-list">
        {replies?.map((reply)=>{
          return(
            <li key={reply?.id}>
              <StyledReply userId ={reply?.User?.id} userName={reply?.User?.name} userAccount={reply?.User?.account} userAvatar={reply?.User?.avatar} replyTime={reply?.createdAt} replyToId={tweetUser?.id} replyToAccount={tweetUser?.account} replyContent={reply?.comment}/> 
              <hr className="main-header-line"/>
            </li>
          )
        })}
      </ul>
        <StyledToastContainer />
    </div>
  )
}

const StyledHomePageTweetArea = styled(HomePageTweetArea)`
  /* error的樣式 */
    .Toastify__toast-container {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      color: #000000;
      width: 402px;
      height: 104px;
    }
    
  .return-icon{
    margin-right: 19px;
    cursor:pointer;

    &:hover{
      fill:#FF6600;
    }
  }

  .main-tweet{
    width: 100%;
    padding: 16px;

    .user-title{
      display:flex;
      margin-bottom: 8px;

      .user-info{
        margin-left: 8px;
      }
    }

    .tweet-content {
      margin-bottom: 8px;
      font-size: 24px;
      line-height: 36px;
      word-wrap: break-word;
    }

    .tweet-time{
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      color: #6C757D;
      margin-bottom: 8px;
    }

  }

  hr{
    border:1px solid #E6ECF0;
  }

  .reply-like-count{
    display:flex;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    margin: 16px auto;    
    
    span{
      color: #6C757D;
    }

    & > .count:first-child{
      margin-right: 24px;
    }
  }

  .reply-like-icon{
    .icon{
      height:24px;
      margin-top: 22px;
      margin-bottom:6px;
      cursor: pointer;

      &:hover{
        fill: #FF6600;
        stroke: #FF6600;
      }
    }
    
    .icon:first-child{
      margin-right: 133px;
    }

    .liked{
      fill: #FF6600;
      stroke: #FF6600;
    }
  }
`

export default StyledHomePageTweetArea