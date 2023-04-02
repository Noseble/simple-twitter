import StyledUserRow from "components/StyledUserRow"
import StyledFollowshipNavItem from "components/StyledFollowshipNavItem"
import styled from "styled-components"
import { getUserFollowers } from "api/api";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const HomePageUserFollowerArea = ({ className }) => {
  const { userId } = useParams()
  const [ userFollowers, setUserFollowers ] = useState([])
  
  
  useEffect(() => {
    
    const getCurrentUserFollowers = async(id) => {
      try {
        const currentUserFollowers = await getUserFollowers( id );
        setUserFollowers(currentUserFollowers);
      } catch (error) {
        console.error(error);
      }
    };

    getCurrentUserFollowers(userId);
  }, [userId]);
  
  return(  
    <div className={className}>
      <StyledFollowshipNavItem/>
      <hr className="main-header-line"/>
      <ul className="follower-list">
        {userFollowers?.map((userFollower)=>{
          return(
            <li key={userFollower?.id}>      
              <StyledUserRow userId={userFollower?.followerId} userAvatar={userFollower?.avatar} userName={userFollower?.name} userIntroduction={userFollower?.introduction} isFollowed={userFollower?.currentUserIsFollowing}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const StyledHomePageUserFollowerArea = styled(HomePageUserFollowerArea)`

`

export default StyledHomePageUserFollowerArea