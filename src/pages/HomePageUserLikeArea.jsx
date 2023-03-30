import StyledTweet from "components/StyledTweet"
import StyledUserNavItem from "components/StyledUserNavItem"
import styled from "styled-components"
import { React, useEffect, useState,useContext } from "react"
import { useParams } from "react-router"

import { getUserLikes } from "api/api"
import { UserInfoContext } from "contexts/UserInfoContext"


const HomePageUserLikeArea = ({ className }) => {
  const userInfo = useContext(UserInfoContext)
  const { userId } = useParams()
  const [ likedTweets, setLikedTweets ] = useState([])
  
  useEffect(() => {
    
    const getLikedTweetsAsync = async(id) => {
      try {
        const newLikedTweets = await getUserLikes( id );
        setLikedTweets(newLikedTweets);
      } catch (error) {
        console.error(error);
      }
    };

    getLikedTweetsAsync(userId);
  }, [userId]);

 
  return(  
    <div className={className}>
      <StyledUserNavItem/>
      <hr className="main-header-line"/>
      <ul className="tweet-list">
        {/* tweetId, tweetUserId, tweetUserAvatar, tweetUserName, tweetUserAccount, tweetTime, tweetDescription, userId, userAvatar, isLiked, replyCounts, likeCounts */}
        {likedTweets.map((likedTweet)=>{
          return(
            <li key={likedTweet.id}>      
              <StyledTweet 
                tweetId={likedTweet.TweetId} 
                tweetUserId={likedTweet.Tweet.User.id}
                tweetUserAvatar={likedTweet.Tweet.User.avatar} 
                tweetUserName={likedTweet.Tweet.User.name} 
                tweetUserAccount={likedTweet.Tweet.User.account} 
                tweetTime={likedTweet.createdAt} 
                tweetDescription={likedTweet.Tweet.description} 
                userId={userInfo.id}
                userAvatar={userInfo.avatar}
                isLiked={likedTweet.Tweet.currentUserLikes} 
                replyCounts={likedTweet.Tweet.replyCounts}
                likeCounts={likedTweet.Tweet.likeCounts}
                />     
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const StyledHomePageUserLikeArea = styled(HomePageUserLikeArea)`

`

export default StyledHomePageUserLikeArea