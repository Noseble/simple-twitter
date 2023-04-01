import { React, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import clsx from 'clsx';
import StyledUserAvatar from './StyledUserAvatar';

import StyledUserTitle from './StyledUserTitle';

//Usage: <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 


//  { avatar, name, account, time, reply, like, id }
/* 導入svg圖檔 */
import { ReactComponent as Reply } from 'assets/icon/reply.svg';
import { ReactComponent as LikeButton } from 'assets/icon/likeButton.svg';
import StyledReplyModal from 'modals/StyledReplyModal';
import { dislikeTweet, likeTweet } from 'api/api';

const Tweet = ({ tweetId, tweetUserId, tweetUserAvatar, tweetUserName, tweetUserAccount, tweetTime, tweetDescription, userId, userAvatar, isLiked, replyCounts, likeCounts, className }) => {
	const [showModal, setShowModal] = useState(false);
	const likeIconRef = useRef(null)
	const [updatedLikeCounts, setUpdatedLikeCounts] = useState(likeCounts)
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

	return (
		<>
		  
				<div className={ className }>
					<StyledUserAvatar userId={tweetUserId} userAvatar={tweetUserAvatar} />
					<div className='tweet-area'>
						<div className="tweet-title">
							<StyledUserTitle userId={tweetUserId} userName={tweetUserName} userAccount={tweetUserAccount}/>
							<span className='tweet-time'>．{`${Math.floor(Number(new Date() - new Date(tweetTime)) / (1000 * 60 * 60))}小時`}</span>
						</div>
						<Link to={`/tweet/${tweetId}`} style={{ textDecoration: 'none' }}>
							<p className='tweet-content'>
							{tweetDescription}
							</p>
						</Link>
						<div className='footer'>
							<button onClick={handleShowModal}><Reply className='icon' fill='#6C757D' height='14px' /><label>{replyCounts}</label></button>
							<StyledReplyModal 
								tweetUserId={tweetUserId} 
								tweetUserAvatar={tweetUserAvatar} 
								tweetUserName={tweetUserName} 
								tweetUserAccount={tweetUserAccount} 
								tweetTime={tweetTime} 
								tweetDescription={tweetDescription} 
								userAvatar={userAvatar} 
								userId={userId} 
								show={showModal} 
								setShow={setShowModal}
							/>
							<button data-tweetid={tweetId} onClick={handleLikeClick} ><LikeButton ref={likeIconRef} className={clsx('icon','like-icon',{liked: isLiked})} fill='none' stroke='#6C757D' strokeWidth='2px' height='14px' /><label>{updatedLikeCounts}</label></button>					
						</div>
					</div>
				</div>

			<hr className='main-header-line'/>
		</>

	);
};

const StyledTweet = styled(Tweet)`
	display: flex;
	justify-content: space-between;
	margin: 16px 24px;
	width: 592px;
	
  .tweet-area{
    display: flex;
		width: 100%;
    flex-direction: column;
    margin-left: 8px;

    .tweet-title{
      display: flex;
      align-items: center;
      
      .tweet-time{
        color: #6C757D;
        font-size: 14px;
        line-height: 22px;
				font-weight: 400;
      }
    }

		.tweet-content{
			margin-top: 8px;
			font-size: 16px;
			line-height: 26px;
			margin: 0 auto;
			overflow-x: hidden;
			white-space: pre-wrap;
		}
 
		.footer {
			display: flex;
			font-size: 14px;
			font-weight:600;
			color: #657786;
			margin-top: 8px;

			button{
				display: flex;
				justify-content: space-between;
				align-items: center; 
				background-color: white;
				border: none;
				width: 42px;
				height: 16px;
				padding: 1px;
				

				.icon{
					cursor: pointer;

					&:hover{
						fill:#FF6600;
						stroke: #FF6600;
						shadow: 0 0 2.5px #6C757D;
					}

					&.liked{
						fill:#FF6600;
						stroke: #FF6600;
					}
				}

				&:first-child{
					margin-right: 40px;
				}
			}
		}
	}
`;

export default StyledTweet;
