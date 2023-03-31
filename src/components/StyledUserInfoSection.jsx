import { useState,useContext } from 'react';

import styled from "styled-components";
import StyledUserAvatar from "./StyledUserAvatar";
import StyledButton from "./StyledButton";
import StyledUserTitle from "./StyledUserTitle";
import StyledOtherButtonArea from "./StyledOtherButtonArea";
import StyledUserEditModal from "modals/StyledUserEditModal";

import { BaseUrlContext } from 'contexts/BaseUrlContext';

//Usage : <StyledUserInfoSection isSelf={true}/>

const UserInfoSection = ({ userId, userImage, userAvatar, userName, userAccount, userIntroduction, isSelf, isFollowed, isNotified, followersCount, followingsCount, className }) => {
  const [showModal, setShowModal] = useState(false);
  const baseUrl = useContext(BaseUrlContext)
  const handleShowModal = () => setShowModal(true);
  
  return(
    <div className={className}>
      <div className="user-image-area">
        <img className="user-background-image" src={userImage} alt="" />
        <StyledUserAvatar className='user-avatar' userId={userId} userAvatar={userAvatar} />
        <div className="user-button">
          {isSelf ?
          <>
            <StyledButton onClick={handleShowModal}>編輯個人資料</StyledButton>
            <StyledUserEditModal 
            userImage={userImage} 
            userAvatar={userAvatar} 
            userName={userName} 
            userIntroduction={userIntroduction} 
            show={showModal} 
            setShow={setShowModal}
            />
          </> :
          <StyledOtherButtonArea userId={userId} isNotified={isNotified} isFollowed={isFollowed}/>} 
        </div>
      </div>
      <div className='user-info-area'>
        <StyledUserTitle columnArrange userId={userId} userName={userName} userAccount={userAccount} /> 
        <p className="user-introduction">
          {userIntroduction}
        </p>
        <div className="user-followship">
          <a href={`${baseUrl}/user/${userId}/following`} className="following">{followingsCount || '0'}個<span className='followship-unit'>跟隨中</span></a>
          <a href={`${baseUrl}/user/${userId}/follower`} className="follower">{ followersCount || '0'}位<span className='followship-unit'>跟隨者</span></a>
        </div>
      </div>
    </div>
  )
}

const StyledUserInfoSection = styled(UserInfoSection)`
  .user-image-area{
  position: relative;
  width: 100%;
  height: 256px;

    .user-background-image{
      background-color: grey;
      width:100%;
      height: 200px;
    }

    .user-avatar{
      position: absolute;
      top: 124px;
      left: 16px;
      width: 140px;
      height: 140px;
      border: 4px solid #FFFFFF;
    }

    .user-button{
      position: absolute;
      top: 216px;
      right: 16px;
    }
  }
  
  .user-info-area{
    width: 100%;
    padding: 16px;

    .user-introduction{
      margin-top:6px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 22px;
    }
  }

  .user-followship{
    display: flex;
    margin-top: 8px;
    font-size: 14px;
    line-height: 22px;
    color: #6C757D;

    
    & .followship-unit{
      color: #6C757D;
    }

    .following,
    .follower{
      text-decoration: none;
      
      &:hover{
        font-weight: 500;
      }
    }

    .following{
      margin-right: 20px;
    }
  }

  &.hidden{
    display:none
  }

`

export default StyledUserInfoSection