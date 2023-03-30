import ReactModal from 'react-modal';
import styled from 'styled-components';

import StyledTextInput from 'components/StyledTextInput';

import defaultUserImg from 'assets/image/defaultUserImg.svg';
import { ReactComponent as UpdatePhoto } from 'assets/icon/updatePhotoIcon.svg'
import { ReactComponent as DeleteButton } from 'assets/icon/cross.svg'

const UserEditModal = ({userImage, userAvatar, userName, userIntroduction, show, setShow, className}) => {
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
        <DeleteButton className='exit-button' fill='#FF6600' onClick={handleClose} />
      </div>
      <hr className='main-header-line'/>
      <div className='modal-body'>
        <div className='bg-image-area'>
          <img className='user-bg-image' src={userImage} />
          <UpdatePhoto className='update-bg' fill='#FFFFFF'/>
          <DeleteButton className='delete-bg' fill='#FFFFFF'/>
        </div>
        <div className='avatar-image-area'>
          <img className='user-avatar-image' src={userAvatar} />
          <UpdatePhoto className='update-avatar' fill='#FFFFFF' />
        </div>
        <div className='input-area'>
          <StyledTextInput className='text-input' width="100%" labelName='名稱' placeholder='請輸入名稱' wordLimit="50" value={userName}/>
          <StyledTextInput textAreaType className='text-input' width="100%" labelName='自我介紹' placeholder='請輸入自我介紹' wordLimit="160" value={userIntroduction} />
        </div>
      </div>
      {/* labelName, type, value, placeholder, wordLimit, wordCount, onChange,passwordWrong */}
    </ReactModal>
  );
}

const StyledUserEditModal = styled(UserEditModal)`
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
    
    .bg-image-area{
      position: relative;
      
      width: 100%;
      height: 200px;

      .user-bg-image{
        width: 100%;
        height: 100%;

        &::before{
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }

      .update-bg{
        position: absolute;
        top: 90px;
        left: 279px;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .delete-bg{
        position:absolute;
        top: 92.5px;
        left: 337.5px;
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
    
    .avatar-image-area{
        position: absolute;
        left: 16px;
        top: 124px;
        width:140px;
        height:140px;

      .user-avatar-image{
        /* box model */
        width:100%;
        height:100%;
        border-radius: 50%;
        border: 4px solid #FFFFFF;
        
        /* others */
        object-fit: cover;
        background-image: url(${defaultUserImg});
        background-size: cover;
        cursor: pointer;
      }

      .update-avatar{
        position: absolute;
        top: 60px;
        left: 60px;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
    
    .input-area{
      padding: 80px 16px 16px;

      .text-input:last-child{
        margin-top: 8px;
      }
    }

  }
`

export default StyledUserEditModal