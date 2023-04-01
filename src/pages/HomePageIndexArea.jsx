import styled from "styled-components"
import { React, useState, useEffect, useContext } from "react"

//shared components
import StyledPostTweet from "components/StyledPostTweet"
import StyledTweet from "components/StyledTweet"
import StyledToastContainer from "components/StyledToastContainer";
// api
import { getTweets } from "api/api"

import { UserInfoContext } from "contexts/UserInfoContext"
import { TweetIdContext } from "contexts/TweetIdContext"

const HomePageIndexArea = ({className}) => {
  const userInfo = useContext(UserInfoContext)
  const [tweets,setTweets] = useState([])

  useEffect(() => {
    const getTweetsAsync = async() => {
      try {
        const newTweets = await getTweets();
        setTweets(newTweets);
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, []);

  return(
    <div className={className}>
      <div className='main-header'>
        <h2>首頁</h2>
      </div>
      <hr className='main-header-line' />
      <StyledPostTweet 
        userId={userInfo.id} 
        userAvatar={userInfo.avatar}
      />
      <hr className="post-tweet-underline"/>
      <ul className='tweet-list'> 
      
        {tweets?.map(({...tweet}) => {
            return(
              <li key={tweet.id}>
                <TweetIdContext.Provider value={tweet.id}>
                <StyledTweet
                  tweetId={tweet.id}
                  tweetUserId={tweet.User.id}
                  tweetUserAvatar={tweet.User.avatar} 
                  tweetUserName={tweet.User.name} 
                  tweetUserAccount={tweet.User.account}
                  tweetTime={tweet.createdAt}
                  tweetDescription={tweet.description} 
                  isLiked={tweet.currentUserLikes}
                  userId={userInfo.id}
                  userAvatar={userInfo.avatar}
                  replyCounts={tweet.replyCounts}
                  likeCounts={tweet.likeCounts}
                  />
                  </TweetIdContext.Provider>
              </li>
            )
          })}
          <StyledToastContainer />
      </ul>
    </div>

  )
}

const StyledHomePageIndexArea = styled(HomePageIndexArea)`
  .post-tweet-underline{
    margin:0;
    border: 10px solid #E6ECF0;
  }
`

export default StyledHomePageIndexArea