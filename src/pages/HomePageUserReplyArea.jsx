import styled from "styled-components"

import StyledReply from "components/StyledReply"
import StyledUserNavItem from "components/StyledUserNavItem"
import StyledUserInfoSection from "components/StyledUserInfoSection"

const HomePageUserReplyArea = ({ className }) => {
  return(  
    <div className={className}>
      <StyledUserInfoSection isSelf={true}/>
      <StyledUserNavItem/>
      <hr className="main-header-line"/>
      <ul className="tweet-list">
        <li>      
          <StyledReply userName='John' userAccount='@heyjohn' userImageSrc='https://picsum.photos/300/300?text=1' replyTime='3小時' replyTo='@apple' replyContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero.'/>     
        </li>
        <li>      
          <StyledReply userName='John' userAccount='@heyjohn' userImageSrc='https://picsum.photos/300/300?text=1' replyTime='3小時' replyTo='@apple' replyContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero.'/>     
        </li>
        <li>      
         <StyledReply userName='John' userAccount='@heyjohn' userImageSrc='https://picsum.photos/300/300?text=1' replyTime='3小時' replyTo='@apple' replyContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero.'/>      
        </li>
      </ul>
    </div>
  )
}

const StyledHomePageUserReplyArea = styled(HomePageUserReplyArea)`

`

export default StyledHomePageUserReplyArea