import ReactModal from 'react-modal';
import styled from 'styled-components';

import {ReactComponent as Cross} from 'assets/icon/cross.svg'
import StyledReplyTweet from 'components/StyledReplyTweet';
import StyledUserAvatar from 'components/StyledUserAvatar';
import StyledUserTitle from 'components/StyledUserTitle';

const ReplyModal = ({ show, setShow, className }) => {
  const handleClose = () => setShow(false);

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
      <div className='modal-header'>
        <Cross className='exit-button' fill='#FF6600' onClick={handleClose} />
      </div>
      <hr className='main-header-line'/>
			<div className='modal-body'>
        <StyledUserAvatar userImageSrc='https://picsum.photos/300/300?text=1' />
        <div className='tweet-area'>          
          <div className="tweet-title">
            <StyledUserTitle userName='Kevin Chou' userAccount='kevinchou'/>
            <span className='tweet-time'>．3小時</span>
          </div>
          <p className='tweet-content'>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. 
          </p>
          <label className='reply-to-area'>回覆給 <a href='#' className='target-user'>@kevinchou</a></label>
        </div>
        <div className='connect-line'></div>
			</div>
      <StyledReplyTweet modalUsed/>
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