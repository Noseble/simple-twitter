import { React, useState, useEffect } from 'react';
import StyledTweet from "components/StyledTweet"
import { useParams } from "react-router"
import StyledUserNavItem from "components/StyledUserNavItem"
import styled from "styled-components"
import StyledUserInfoSection from "components/StyledUserInfoSection"

import { getUser } from 'api/api';

const HomePageUserTweetArea = ({ className }) => {
  const { userId } = useParams();
  const MyId = localStorage.getItem('MyId')

  const [user, setUser] = useState({});
  
  useEffect(() => {
    const getCurrentUser = async() => {
      try {
        const res = await getUser(userId);
        setUser(res);
      } catch (error) {
        console.error(error);
      }
    };
    getCurrentUser();
  }, [userId]);

  // console.log(user);

  return(  
    <div className={className}>
      <StyledUserInfoSection userImage={user.image} userAvatar={user.avatar} userName={user.name} userAccount={user.name} userIntroduction={user.introduction} isSelf={(userId === MyId)} isFollowed={user.isFollowed}/>
      <StyledUserNavItem/>
      <hr className="main-header-line"/>
      <ul className="tweet-list">
        <li>      
          <StyledTweet userAvatar='https://picsum.photos/300/300?text=1' userName='John' userAccount='heyjohn' tweetTime='3小時' tweetDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/>     
        </li>
        <li>      
          <StyledTweet userAvatar='https://picsum.photos/300/300?text=1' userName='John' userAccount='heyjohn' tweetTime='3小時' tweetDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/>     
        </li>
        <li>      
          <StyledTweet userAvatar='https://picsum.photos/300/300?text=1' userName='John' userAccount='heyjohn' tweetTime='3小時' tweetDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/>     
        </li>
      </ul>
    </div>
  )
}

const StyledHomePageUserTweetArea = styled(HomePageUserTweetArea)`

`

export default StyledHomePageUserTweetArea