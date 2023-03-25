import StyledUserRow from "components/StyledUserRow"
import StyledFollowshipNavItem from "components/StyledFollowshipNavItem"
import styled from "styled-components"

const HomePageUserFollowerArea = ({ className }) => {
  return(  
    <div className={className}>
      <StyledFollowshipNavItem/>
      <hr className="main-header-line"/>
      <ul className="follower-list">
        <li>      
          <StyledUserRow userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isFollowing={false}/>
        </li>
        <li>      
          <StyledUserRow userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isFollowing={false}/>
        </li>
        <li>      
          <StyledUserRow userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isFollowing={false}/>
        </li>
      </ul>
    </div>
  )
}

const StyledHomePageUserFollowerArea = styled(HomePageUserFollowerArea)`

`

export default StyledHomePageUserFollowerArea