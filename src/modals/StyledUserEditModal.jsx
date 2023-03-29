import {React,useState,useEffect} from "react";
import ReactModal from 'react-modal';
import styled from 'styled-components';

import {ReactComponent as Cross} from 'assets/icon/cross.svg'
import StyledPostTweet from 'components/StyledPostTweet';
import StyledUserAvatar from 'components/StyledUserAvatar';
import StyledTextInput from 'components/StyledTextInput';
import StyledButton from "components/StyledButton";

import defaultUserImg from 'assets/image/defaultUserImg.svg';
import { ReactComponent as UpdatePhoto } from 'assets/icon/updatePhotoIcon.svg'
import { ReactComponent as DeleteButton } from 'assets/icon/cross.svg'

// api 
import { getUserSetting } from "api/api";
import { setUserSetting } from "api/api";

const UserEditModal = ({show, setShow, className}) => {
  const MyId = localStorage.getItem('MyId')
  const [name , setName] = useState('')
  const [oldAvatar , setOldAvatar] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [oldImage, setOldImage] = useState('')
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const getUserSettingAsync = async(MyId) => {
      try {
        const currentSettings = await getUserSetting(MyId);
        setName(currentSettings.name);
        setIntroduction(currentSettings.introduction);
        setOldAvatar(currentSettings.avatar);
        setOldImage(currentSettings.image);
      } catch (error) {
        console.error(error);
      }
    };
    getUserSettingAsync(MyId);
  }, [MyId]);

  const handleUpdate = async( )=> {
    try {
      const res = await setUserSetting( MyId, name, introduction, image, avatar)
      handleClose()
    //   if (message === undefined) {
    //   // 修改成功訊息
    //   Swal.fire({
    //     position: 'top',
    //     title: '修改成功！',
    //     timer: 1000,
    //     icon: 'success',
    //     showConfirmButton: false,
    //   });
    //   navigate('/')
    // } else {
    //   // 修改失敗訊息
    //   Swal.fire({
    //     position: 'top',
    //     title: '修改失敗！',
    //     text: message, // 顯示錯誤訊息
    //     timer: 1000,
    //     icon: 'error',
    //     showConfirmButton: false,
    //   });
    // }
    } catch (error) {
    console.error(error);
  }
  }

  const handleUploadFile = (e) => {
    if (!e.target.files[0]) return;
    let reader = new FileReader();
    reader.onload = function () {
      if(e.target.className ===  'file-upload-bg') {
        setImage(reader.result);
      } else if ( e.target.className ===  'file-upload-avatar')
        setAvatar(reader.result);
    };
    reader?.readAsDataURL(e?.target?.files[0]);
    e.target.value = "";
  };

  const handleClear = (e) => {
    if(e.target.className ===  'delete-upload-bg') {
        setImage(null);
      } else if ( e.target.className ===  'delete-upload-avatar'){
        setAvatar(null);
    }
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

      <div className='modal-header'>
        <Cross className='exit-button' fill='#FF6600' onClick={handleClose} />
        <StyledButton onClick={handleUpdate}>儲存</StyledButton>
      </div>
      <hr className='main-header-line'/>
      <div className='modal-body'>
        <div className='bg-image-area'>
          <img className='user-bg-image' src={oldImage} />
          {image !== null ? null : <UpdatePhoto className='update-bg' fill='#FFFFFF' /> }
            <input className="file-upload-bg" type="file"  accept="image/png, image/jpeg" onChange={handleUploadFile} />
          <Cross className='delete-bg' fill='#FFFFFF'/>
            <button className="delete-upload-bg" onClick={handleClear} />
          
        </div>
        <div className='avatar-image-area'>
          <img className='user-avatar-image' src={oldAvatar} />
          {avatar !== null ? <Cross className='delete-avatar' fill='#FFFFFF'/> : <UpdatePhoto className='update-avatar' fill='#FFFFFF' /> }
          {avatar === null ? <input className="file-upload-avatar" type="file"  accept="image/png, image/jpeg" onChange={handleUploadFile} /> : <button className="delete-upload-avatar" onClick={handleClear} /> }
          
          
        </div>
        <div className='input-area'>
          <StyledTextInput className='text-input' width="100%" labelName='名稱' placeholder='請輸入名稱' wordLimit="50" value={name} onChange={(nameInputValue) => setName(nameInputValue)} />
          <StyledTextInput textAreaType className='text-input' width="100%" labelName='自我介紹' placeholder='請輸入自我介紹' wordLimit="160" value={introduction} onChange={(introductionInputValue) => setIntroduction(introductionInputValue)} />
        </div>
      </div>

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

  input[type=file]::-webkit-file-upload-button{
      cursor: pointer; 
  }

  .modal-header{
    display: flex;
    justify-content: space-between;
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
      }

      .file-upload-bg {
        opacity: 0;
        position: absolute;
        width: 25px;
        top: 45%;
        left: 44%;
        transform: translate(-50%, -50%);
        transform: rotate(90deg);
      }

      .delete-bg{
        position:absolute;
        top: 92.5px;
        left: 337.5px;
        width: 15px;
        height: 15px;
      }

      .delete-upload-bg{
        opacity: 0;
        position: absolute;
        padding: 10px;
        top: 50%;
        left: 54%;
        transform: translate(-50%, -50%);
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

      .file-upload-avatar{
        opacity: 0;
        position: absolute;
        width: 25px;
        top: 45%;
        left: 44%;
        transform: translate(-50%, -50%);
        transform: rotate(90deg);
      }

      .delete-avatar{
        position: absolute;
        top: 60px;
        left: 60px;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .delete-upload-avatar{
        opacity: 0;
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