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
        const res = await getUserLikes( id );
        setLikedTweets(res);
      } catch (error) {
        console.error(error);
      }
    };

    getLikedTweetsAsync(userId);
  }, [userId]);

  console.log(likedTweets)
 
  return(  
    <div className={className}>
      <StyledUserNavItem/>
      <hr className="main-header-line"/>
      <ul className="tweet-list">
        {likedTweets.map((likedTweet)=>{
          const tweetInfo = likedTweet.Tweet
          const tweetUser = tweetUser 
          
          return(
            <li key={likedTweet.id}>      
              <StyledTweet 
                tweetId={likedTweet.TweetId} 
                tweetUserId={tweetUser.id}
                tweetUserAvatar={tweetUser.avatar} 
                tweetUserName={tweetUser.name} 
                tweetUserAccount={tweetUser.account} 
                tweetTime={likedTweet.createdAt} 
                tweetDescription={tweetInfo.description} 
                userId={userInfo.id}
                userAvatar={userInfo.avatar}
                isLiked={true} 
                replyCounts={tweetInfo.replyCounts}
                likeCounts={tweetInfo.likeCounts}
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