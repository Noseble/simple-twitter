import StyledTweet from "components/StyledTweet"
import StyledUserNavItem from "components/StyledUserNavItem"
import styled from "styled-components"
import { React, useEffect, useState } from "react"
import { useParams } from "react-router"
import { getUser, getUserLikes } from "api/api"

const HomePageUserLikeArea = ({ className }) => {
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
        {likedTweets.map((likedTweet)=>{
          return(
            <li key={likedTweet.id}>      
              <StyledTweet tweetId={likedTweet.TweetId} userId={likedTweet.Tweet.User.id} userAvatar={likedTweet.Tweet.User.avatar} userName='John hey' userAccount={likedTweet.Tweet.User.account} tweetTime={likedTweet.createdAt} tweetDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/>     
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