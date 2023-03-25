import StyledTweet from "components/StyledTweet"
import StyledUserNavItem from "components/StyledUserNavItem"
import styled from "styled-components"
import StyledUserInfoSection from "components/StyledUserInfoSection"

const HomePageUserTweetArea = ({ className }) => {
  return(  
    <div className={className}>
      <StyledUserInfoSection isSelf={true}/>
      <StyledUserNavItem/>
      <hr className="main-header-line"/>
      <ul className="tweet-list">
        <li>      
          <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/>     
        </li>
        <li>      
          <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/>     
        </li>
        <li>      
          <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={false}/>     
        </li>
      </ul>
    </div>
  )
}

const StyledHomePageUserTweetArea = styled(HomePageUserTweetArea)`

`

export default StyledHomePageUserTweetArea