import { React, useState, useEffect } from 'react';
import StyledTweet from "components/StyledTweet"
import StyledUserNavItem from "components/StyledUserNavItem"
import styled from "styled-components"
import { getUser, getUserTweets } from 'api/api';
import { useParams } from 'react-router';

const HomePageUserTweetArea = ({ className }) => {
  const { userId } = useParams()
  const [ tweets, setTweets ] = useState([])
  const [ user, setUser ] = useState({})
  
  useEffect(() => {
    const getCurrentUser = async(id) => {
      try {
        const res = await getUser(id);
        setUser(res);
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
              <StyledTweet tweetId={tweet.id} userId={tweet.userId} userAvatar={user.avatar} userName={user.name} userAccount={user.account} tweetTime={tweet.createdAt} tweetDescription={tweet.description} isLiked={tweet.isLiked}/>   
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