import { React, useState, useEffect } from 'react';
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import styled from "styled-components";
import clsx from 'clsx';

import StyledUserInfoSection from 'components/StyledUserInfoSection';

import { ReactComponent as ReturnIcon } from 'assets/icon/returnArrow.svg';

import { getUser, getUserFollowers, getUserFollowings, getUserTweets } from 'api/api';


const HomePageUserArea = ({ myInfo, className}) => {
  const { userId } = useParams()
  const currentUrl = useLocation().pathname
  const MyId = localStorage.getItem('MyId')
  const [user, setUser] = useState({});
  const [followersNumber, setFollowersNumber] = useState('')
  const [followingsNumber, setFollowingsNumber] = useState('')
  const [tweetsNumber, setTweetsNumber] = useState('')

  //取得現有Url最後一個字串
  const lastSegmentOfUrl = currentUrl.substring(currentUrl.lastIndexOf('/')+ 1)

  useEffect(() => {
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
        setFollowersNumber(res.length);
      } catch (error) {
        console.error(error);
      }
    }

    const getCurrentUserFollowings = async(id) => {
      try {
        const res = await getUserFollowings(id);
        setFollowingsNumber(res.length);
      } catch (error) {
        console.error(error);
      }
    }

    const getCurrentUserTweets = async(id) =>{
      try {
        const res = await getUserTweets(id);
        setTweetsNumber(res.length);
      } catch (error) {
        console.error(error);
      }
    }

    getCurrentUser(userId);
    getCurrentUserFollowers(userId);
    getCurrentUserFollowings(userId);
    getCurrentUserTweets(userId)

  }, [userId]);

  return(
    <div className={className}>
      <div className='main-header'>
        <Link to="#" onClick={() => { window.history.back() }}><ReturnIcon className="return-icon" /></Link>
        <div className="user-title">
          <h3 className="user-title-name">{user.name}</h3>
          <h5 className="user-tweets">{tweetsNumber} 推文</h5>
        </div>
      </div>
      <hr className='main-header-line' />
      <StyledUserInfoSection className={clsx({hidden: lastSegmentOfUrl === 'following' || lastSegmentOfUrl === 'follower'})} userId={userId} userImage={user.image} userAvatar={user.avatar} userName={user.name} userAccount={user.name} userIntroduction={user.introduction} isSelf={(userId === MyId)} followersCount={followersNumber} followingsCount={followingsNumber} isFollowed={user.isFollowed} isNotiFied={user.isNotiFied}/>
      <Outlet myInfo={myInfo}/>
    </div>
  )
}

const StyledHomePageUserArea = styled(HomePageUserArea)`
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