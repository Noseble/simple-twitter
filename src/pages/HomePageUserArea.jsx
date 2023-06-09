import { React, useState, useEffect, useContext } from 'react';
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import styled from "styled-components";
import clsx from 'clsx';

import StyledUserInfoSection from 'components/StyledUserInfoSection';
import StyledToastContainer from 'components/StyledToastContainer';
import { ReactComponent as ReturnIcon } from 'assets/icon/returnArrow.svg';

import { getUser, getUserFollowers, getUserFollowings, getUserTweets } from 'api/api';
import { FollowUpdateContext } from 'contexts/FollowUpdateContext';
import { UserInfoUpdateContext } from 'contexts/UserInfoUpdateContext';


const HomePageUserArea = ({ className}) => {
  const { userId } = useParams()
  const currentUrl = useLocation().pathname
  const myId = sessionStorage.getItem('myId')
  const [user, setUser] = useState({});
  const [followersNumber, setFollowersNumber] = useState('')
  const [followingsNumber, setFollowingsNumber] = useState('')
  const [tweetsNumber, setTweetsNumber] = useState('')
  const FollowUpdate = useContext(FollowUpdateContext)
  const userInfoUpdate = useContext(UserInfoUpdateContext)

  //取得現有Url最後一個字串
  const lastSegmentOfUrl = currentUrl.substring(currentUrl.lastIndexOf('/')+ 1)
  
  const getCurrentUser = async(id) => {
    try {
      const res = await getUser(id);
      setUser(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentUserFollowers = async(id) => {
    try {
      const res = await getUserFollowers(id);
      setFollowersNumber(res?.length);
    } catch (error) {
      console.error(error);
    }
  }

  const getCurrentUserFollowings = async(id) => {
    try {
      const res = await getUserFollowings(id);
      setFollowingsNumber(res?.length);
    } catch (error) {
      console.error(error);
    }
  }

  const getCurrentUserTweets = async(id) =>{
    try {
      const res = await getUserTweets(id);
      setTweetsNumber(res?.length);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    //進道不同user路由的初始化
    getCurrentUserTweets(userId);
    getCurrentUserFollowers(userId);
    getCurrentUserFollowings(userId);
    getCurrentUser(userId);

  }, [userId]);

  useEffect(()=>{
    //每次點擊追蹤後更新資訊
    if(FollowUpdate.isFollowUpdate){
      //設定延遲時間確保資料庫更新了
      setTimeout(()=>{
        getCurrentUserTweets(userId);
        getCurrentUserFollowers(userId);
        getCurrentUserFollowings(userId);
        FollowUpdate.setIsFollowUpdate(false);
      },250)
    }
  
  },[userId,FollowUpdate])

  useEffect(()=>{
    //若使用者編輯資訊
    if(userInfoUpdate.isEdited){
      getCurrentUser(userId);
      userInfoUpdate.setIsEdited(false);
    }
  },[userInfoUpdate,userId])

  return(
    <div className={className}>
      <div className='main-header'>
        <Link to={lastSegmentOfUrl === 'following' || lastSegmentOfUrl === 'follower' ? `/user/${userId}` :'/'} ><ReturnIcon className="return-icon" /></Link>
        <div className="user-title">
          <h3 className="user-title-name">{user.name}</h3>
          <h5 className="user-tweets">{tweetsNumber} 推文</h5>
        </div>
      </div>
      <hr className='main-header-line' />
      <StyledUserInfoSection 
        className={clsx({hidden: lastSegmentOfUrl === 'following' || lastSegmentOfUrl === 'follower'})} 
        userId={userId} 
        userImage={user.image} 
        userAvatar={user.avatar} 
        userName={user.name} 
        userAccount={user.name} 
        userIntroduction={user.introduction} 
        isSelf={(userId === myId)} 
        followersCount={followersNumber} 
        followingsCount={followingsNumber} 
        isFollowed={user.isFollowed} 
        isNotiFied={user.isNotiFied}
      />
      <StyledToastContainer />
      <Outlet />
    </div>
  )
}

const StyledHomePageUserArea = styled(HomePageUserArea)`
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

  .user-title{
    display: flex;
    flex-direction: column;

    h3
    ,h5{
      margin:0;
      padding:0;
    }

    h3{
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }

    h5{
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      color: #6C757D;
    }
  }
`


export default StyledHomePageUserArea