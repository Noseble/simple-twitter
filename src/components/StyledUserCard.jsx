import React from "react";
import styled, { css } from "styled-components";
import StyledUserAvatar from "./StyledUserAvatar";
import StyledUserTitle from "./StyledUserTitle";

import { ReactComponent as Pen } from 'assets/icon/Pen.svg';
import { ReactComponent as Like } from "assets/icon/likeButton.svg";

//Usage: <StyledUserCard bgImageSrc='https://source.unsplash.com/random/1920x1080' userImageSrc='https://picsum.photos/300/300?text=1' userName='Kevin Chou' userAccount='@kevinchou' userTweetsCount='1.8k' userLikesCounts='21k' userFollowingCount='50' userFollowerCount='12'/>



const UserCard = ({ bgImageSrc, userImageSrc, userName, userAccount, userTweetsCount, userLikesCounts, userFollowingCount, userFollowerCount, className }) => {
  return(
    <div className={className}>
      <img src={bgImageSrc} className='user-background-image'/>
      <StyledUserAvatar className='user-avatar' userAvatar={userImageSrc}/>
      <div className="user-info">
        <StyledUserTitle className='user-title' columnArrange userName={userName} userAccount={`${userAccount}`}/>
        <div className="tweets-likes-count">
          <div className="tweets-count"><Pen className="icon" fill='#6C757D' width='24px' height='22px'/>{userTweetsCount}</div>
          <div className="likes-count"><Like className="icon"  fill='none' stroke='#6C757D' strokeWidth='2px' width='20px' height='19px'/>{userLikesCounts}</div>
        </div>
        <div className="followship-counts">
          <a href='#' className="following">{userFollowingCount}個<span className='followship-unit'>跟隨中</span></a>
          <a href='#' className="follower">{userFollowerCount}位<span className='followship-unit'>跟隨者</span></a>
        </div>

      </div>
    </div>
  )
}

const StyledUserCard = styled(UserCard)`
  /* position & display */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  /* box model */
  width: 210px;
  height: 314px;
  background-color: #F6F7F8;
  border-radius: 10px;

  .user-background-image{
    width: 100%;
    height: 140px;
    border-radius: 10px 10px 0 0;
  }

  .user-avatar{
    /* position */
    position: absolute;
    top: 114px;
    left: 50%;
    
    /* box model & others */
    width: 100px;
    height: 100px;
    border: 4px solid #FFFFFF;
    transform: translate(-50%, -50%);

  }

  .user-info{
    /* display */
    display: flex;
    flex-direction: column;
    align-items: center;
    
    /* box model */
    width: 100%;
    height: 174px;
    padding: 32px 20px 24px;

    .user-title{
      align-items: center;
    }

    .tweets-likes-count{
      /* display */
      display:flex;
      justify-content: space-between;

      /* box model */
      width: 140px;
      height: 26px;
      margin-top: 16px;
      
      .tweets-count,
      .likes-count{
        /* display */
        display: flex;
        align-items: center;

        /* font & others */
        font-family: 'Montserrat';
        font-size: 16px;
        font-weight: 500;
        line-height: 15px;

      }
      .icon{
        margin-right: 8px;
      }
    }

    .followship-counts{
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
        margin-right: 8px;
      }
    }

  }


`

export default StyledUserCard