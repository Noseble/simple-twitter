import styled from "styled-components"
import { useState,useEffect } from "react"

//shared components
import StyledPostTweet from "components/StyledPostTweet"
import StyledTweet from "components/StyledTweet"

// api
import { getTweets } from "api/api"

const HomePageIndexArea = ({className}) => {
  const [tweets,setTweets] = useState([])

    useEffect(() => {
      const getTweetsAsync = async() => {
        try {
          const tweets = await getTweets();
          setTweets(tweets.map((tweet) => ({ ...tweet})));
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
      <StyledPostTweet />
      <hr className="post-tweet-underline"/>
      <ul className='tweet-list'> 
        {tweets.map(({...tweet}) => {
            return(
              <li key={tweet.id}>
                <StyledTweet
                  userAvatar={tweet.User.avatar} 
                  userName={tweet.User.name} 
                  userAccount={tweet.User.account}
                  tweetTime={`${Math.floor(Number(new Date() - new Date(tweet.createdAt)) / (1000 * 60 * 60))}小時`}
                  tweetDescription={tweet.description} 
                  isLiked={true}/> 
              </li>
            )
          })}
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