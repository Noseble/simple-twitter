import StyledTweet from "components/StyledTweet"
import StyledUserNavItem from "components/StyledUserNavItem"
import styled from "styled-components"
import StyledUserInfoSection from "components/StyledUserInfoSection"

const HomePageUserLikeArea = ({ className }) => {
  return(  
    <div className={className}>
      <StyledUserInfoSection isSelf={true}/>
      <StyledUserNavItem/>
      <hr className="main-header-line"/>
      <ul className="tweet-list">
        <li>      
          <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/>     
        </li>
        <li>      
          <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/>     
        </li>
        <li>      
          <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/>     
        </li>
      </ul>
    </div>
  )
}

const StyledHomePageUserLikeArea = styled(HomePageUserLikeArea)`

`

export default StyledHomePageUserLikeArea