import styled from "styled-components";
import StyledUserAvatar from "./StyledUserAvatar";
import StyledButton from "./StyledButton";
import StyledUserTitle from "./StyledUserTitle";
import StyledOtherButtonArea from "./StyledOtherButtonArea";

//Usage : <StyledUserInfoSection isSelf={true}/>

const UserInfoSection = ({ isSelf, className }) => {
  return(
    <div className={className}>
      <div className="user-image-area">
        <img className="user-background-image" src='https://i.imgur.com/gerdVUX.png'/>
        <StyledUserAvatar className='user-avatar' userImageSrc="https://picsum.photos/300/300?text=1" />
        <div className="user-button">
          {isSelf ?
          <StyledButton>編輯個人資料</StyledButton> :
          <StyledOtherButtonArea isNotified={true} isFollowing={true}/>} 
        </div>
      </div>
      <div className='user-info-area'>
        <StyledUserTitle className='user-' columnArrange userName='Kevin Chou' userAccount='@kevinchou' /> 
        <p className="user-introduction">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        </p>
        <div className="user-followship">
          <div className="following"><span className='followship-number'>34個</span>跟隨中</div>
          <div className="follower"><span className='followship-number'>59位</span>跟隨者</div>
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

    
    & .followship-number{
      color: #171725;
    }

    .following,
    .follower{
      cursor: pointer;
    }

    .following{
      margin-right: 20px;
    }
  }

`

export default StyledUserInfoSection