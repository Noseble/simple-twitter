import styled from "styled-components"

import StyledPostTweet from "components/StyledPostTweet"
import StyledTweet from "components/StyledTweet"


const HomePageIndexArea = ({className}) => {
  return(
    <div className={className}>
      <div className='main-header'>
        <h2>首頁</h2>
      </div>
      <hr className='main-header-line' />
      <StyledPostTweet />
      <hr className="post-tweet-underline"/>
      <ul className='tweet-list'> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/>
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
        <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/> 
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