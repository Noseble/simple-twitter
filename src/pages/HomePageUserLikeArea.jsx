import StyledTweet from "components/StyledTweet"
import StyledUserNavItem from "components/StyledUserNavItem"
import styled from "styled-components"
import { React, useEffect, useState,useContext } from "react"
import { useParams } from "react-router"

import { getUserLikes } from "api/api"
import { UserInfoContext } from "contexts/UserInfoContext"
import { UserInfoUpdateContext } from "contexts/UserInfoUpdateContext"


const HomePageUserLikeArea = ({ className }) => {
  const userInfo = useContext(UserInfoContext)
  const { userId } = useParams()
  const [ likedTweets, setLikedTweets ] = useState([])
  const userInfoUpdate = useContext(UserInfoUpdateContext)
  
  const getLikedTweetsAsync = async(id) => {
    try {
      const res = await getUserLikes( id );
      setLikedTweets(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //初始化
    getLikedTweetsAsync(userId);
  }, [userId]);

  useEffect(()=>{
    if(userInfoUpdate.isEdited){
      getLikedTweetsAsync(userId);
      userInfoUpdate.setIsEdited(false);
    }
  },[userId,userInfoUpdate])



  console.log(likedTweets)
 
  return(  
    <div className={className}>
      <StyledUserNavItem/>
      <hr className="main-header-line"/>
      <ul className="tweet-list">
        {likedTweets?.map((likedTweet)=>{
          return(
            <li key={likedTweet?.id}>
              <StyledTweet 
                tweetId={likedTweet?.TweetId} 
                tweetUserId={likedTweet?.Tweet?.User?.id}
                tweetUserAvatar={likedTweet?.Tweet?.User?.avatar} 
                tweetUserName={likedTweet?.Tweet?.User?.name} 
                tweetUserAccount={likedTweet?.Tweet?.User?.account} 
                tweetTime={likedTweet?.createdAt} 
                tweetDescription={likedTweet?.Tweet?.description} 
                userId={userInfo?.id}
                userAvatar={userInfo?.avatar}
                isLiked={likedTweet?.Tweet?.currentUserLikes} 
                replyCounts={likedTweet?.Tweet?.replyCounts}
                likeCounts={likedTweet?.Tweet?.likeCounts}
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