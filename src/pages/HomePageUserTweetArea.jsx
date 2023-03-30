import { React, useState, useEffect, useContext } from 'react';
import StyledTweet from "components/StyledTweet"
import StyledUserNavItem from "components/StyledUserNavItem"
import styled from "styled-components"
import { getUser, getUserTweets } from 'api/api';
import { useParams } from 'react-router';

import { UserInfoContext } from 'contexts/UserInfoContext';

const HomePageUserTweetArea = ({ className }) => {
  const userInfo = useContext(UserInfoContext)
  const { userId } = useParams()
  const [ tweets, setTweets ] = useState([])
  const [ currentUser, setCurrentUser ] = useState({})
  
  useEffect(() => {

    const getCurrentUser = async(id) => {
      try {
        const res = await getUser(id);
        setCurrentUser(res);
      } catch (error) {
        console.error(error);
      }
    }
    
    const getTweetsAsync = async(id) => {
      try {
        const newTweets = await getUserTweets( id );
        setTweets(newTweets);
      } catch (error) {
        console.error(error);
      }
    };
    
    getCurrentUser(userId);
    getTweetsAsync(userId);
  }, [userId]);

  return(  
    <div className={className}>
      <StyledUserNavItem/>
      <hr className="main-header-line"/>
      <ul className="tweet-list">
        {tweets.map((tweet) =>{
          return(
            <li key={tweet.id}>
              <StyledTweet 
                tweetId={tweet.id} 
                tweetUserId={tweet.UserId} 
                tweetUserAvatar={currentUser.avatar} 
                tweetUserName={currentUser.name} 
                tweetUserAccount={currentUser.account} 
                tweetTime={tweet.createdAt} 
                tweetDescription={tweet.description} 
                isLiked={tweet.isLiked}
                replyCounts={tweet.replyCounts}
                likeCounts={tweet.likeCounts}
                userId={userInfo.id}
                userAvatar={userInfo.avatar}
              />   
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const StyledHomePageUserTweetArea = styled(HomePageUserTweetArea)`

`

export default StyledHomePageUserTweetArea