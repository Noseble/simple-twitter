import styled from "styled-components"
import { useState,useEffect } from "react"
import StyledPostTweet from "components/StyledPostTweet"
import StyledTweet from "components/StyledTweet"

// api
import { getTweets } from "api/api"

const HomePageIndexArea = ({className}) => {
  const [tweets,setTweets] = useState('')

    useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(tweets.map((tweet) => ({ ...tweet})));
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, []);


  console.log(tweets)

  return(
    <div className={className}>
      <div className='main-header'>
        <h2>首頁</h2>
      </div>
      <hr className='main-header-line' />
      <StyledPostTweet />
      <hr className="post-tweet-underline"/>
      <ul className='tweet-list'> 
        {/* {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onSave={({ id, title }) => onSave?.({ id, title })}
            onToggleDone={(id) => onToggleDone?.(id)}
            onDelete={(id) => onDelete?.(id)}
            onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
          />
        );
      })} */}
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
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