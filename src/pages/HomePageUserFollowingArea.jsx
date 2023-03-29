import StyledUserRow from "components/StyledUserRow"
import StyledFollowshipNavItem from "components/StyledFollowshipNavItem"
import styled from "styled-components"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getUserFollowings } from "api/api"

const HomePageUserFollowingArea = ({ className }) => {
  const { userId } = useParams()
  const [ userFollowings, setUserFollowings ] = useState([])
  
  
  useEffect(() => {
    
    const getCurrentUserFollowings = async(id) => {
      try {
        const currentUserFollowings = await getUserFollowings( id );
        setUserFollowings(currentUserFollowings);
      } catch (error) {
        console.error(error);
      }
    };

    getCurrentUserFollowings(userId);
  }, [userId]);
  
  return(  
    <div className={className}>
      <StyledFollowshipNavItem/>
      <hr className="main-header-line"/>
      <ul className="follower-list">
        {userFollowings.map((userFollowing)=>{
          return(
            <li key={userFollowing.id}>      
              <StyledUserRow userId={userFollowing.followingId} userAvatar={userFollowing.avatar} userName={userFollowing.name} userIntroduction={userFollowing.introduction} isFollowed={userFollowing.currentUserIsFollowing}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const StyledHomePageUserFollowingArea = styled(HomePageUserFollowingArea)`

`

export default StyledHomePageUserFollowingArea