import { React, useState,useContext } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import {ReactComponent as Cross} from 'assets/icon/cross.svg'
import StyledReplyTweet from 'components/StyledReplyTweet';
import StyledUserAvatar from 'components/StyledUserAvatar';
import StyledUserTitle from 'components/StyledUserTitle';
import StyledToastContainer from "components/StyledToastContainer";
import { TweetIdContext } from 'contexts/TweetIdContext';

// 載入svg
import { ReactComponent as Success } from "assets/icon/success.svg"

// api
import { addReplies } from 'api/api';

const ReplyModal = ({  id, tweetUserId, tweetUserAvatar, tweetUserName, tweetUserAccount, tweetTime, tweetDescription, userAvatar, userId, show, setShow, setIsReplied, className }) => {
  const handleClose = () => setShow(false);
  const tweetId = useContext(TweetIdContext)
  const [comment, setComment ] = useState('')

  const handleAddRepliesAsync = async() => {
    if(comment?.length === 140 || comment?.length === 0) return
    try {
      const res = await addReplies( id, tweetId, comment)
      if(res){
        handleClose()
        showToastMessage()
        setTimeout(() => setIsReplied(true), 1000);
      }
    } catch(error){
      console.error(error)
    }
  }
   const showToastMessage = () => {
    toast.success('推文成功', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 800,
      hideProgressBar: true,
      icon: <Success />,
    });
 };

  return (
    <ReactModal 
      isOpen={show} 
      onRequestClose={handleClose} 
      className={className} 
      style={{ 
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
      }} 
      portalClassName="modal-portal"
    >
      <div className='modal-header' id={tweetUserId}>
        <Cross className='exit-button' fill='#FF6600' onClick={handleClose} />
      </div>
      <hr className='main-header-line'/>
			<div className='modal-body'>
        <StyledUserAvatar userAvatar={tweetUserAvatar} />
        <div className='tweet-area'>          
          <div className="tweet-title">
            <StyledUserTitle userId={tweetUserId} userName={tweetUserName} userAccount={tweetUserAccount}/>
            <span className='tweet-time'>．{`${Math.floor(Number(new Date() - new Date(tweetTime)) / (1000 * 60 * 60))}小時`}</span>
          </div>
          <p className='tweet-content'>
            {tweetDescription} 
          </p>
          <label className='reply-to-area'>回覆給 <a href={`/user/${tweetUserId}`} className='target-user'>@{tweetUserName}</a></label>
        </div>
        <div className='connect-line'></div>
			</div>
      <StyledReplyTweet 
        modalUsed userAvatar={userAvatar} 
        userId={userId} 
        error={comment?.length} 
        onChange={(commentInputValue) => setComment(commentInputValue)} 
        onClick={handleAddRepliesAsync}
        onKeyDown={(event)=>{
          if (event.keyCode === 13 && !event.shiftKey) { // Enter key
            event.preventDefault(); // prevent default behavior
            handleAddRepliesAsync();
          } else if (event.keyCode === 13 && event.shiftKey) { // Shift + Enter
            setComment(comment + "\n");
          }
        }}
      />
      <StyledToastContainer />
    </ReactModal>
  );
}

const StyledReplyModal = styled(ReplyModal)`
  width: 634px;
  background-color: #FFFFFF;
  border-radius: 14px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-top: 59px;
  margin-left: calc(50vw - 364px);


  .modal-header{
    width:100%;
    height: 54px;
    display: flex;
    padding: 8px 16px;
    align-items: center;

    .exit-button{
      cursor: pointer;
    }
  }

  .modal-body{
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 18px 16px 8px;
    width: 100%;
    
    .tweet-area{
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      width: 90%;

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
        width: 100%;
        word-wrap: break-word;
      }
    }

    .reply-to-area {
      color: #999999;
      font-size: 14px;
      line-height: 22px;
      margin: 18px 0 0;
 

      .target-user{
       color: #FF6600;
       text-decoration: none;

       &:hover{
        font-weight: 500;
       }
      }
    }

    .connect-line{
      position: absolute;
      top: 73px;
      left: 40px;
      bottom: -5px;
      width: 2px;
      background-color:#CCD6DD;
    }
  }
`

export default StyledReplyModal