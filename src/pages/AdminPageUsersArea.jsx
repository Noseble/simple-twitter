import styled from "styled-components";
import { useState, useEffect } from 'react';
import StyledUserCard from "components/StyledUserCard"
import { getAdminUsers } from "api/api";

const AdminPageUsersArea = ({ className }) => {
  const [AdminUsers, setAdminUsers] = useState([]);

   useEffect(() => {
      const getAdminUsersAsync = async() => {
        try {
          const res = await getAdminUsers();
          setAdminUsers(res);
        } catch (error) {
          console.error(error);
        }
      };
      getAdminUsersAsync();
    }, []);

  return (
    
      <div className={className}>
        <div className="main-header">
          <h2>使用者列表</h2>
        </div>
        <hr className="main-header-line"/>
        <div className='user-card-list'>
        {AdminUsers.map(({...AdminUser})=>{
          return(
            <StyledUserCard 
              key={AdminUser.id}
              bgImageSrc={AdminUser.image}
              userImageSrc={AdminUser.avatar}
              userName={AdminUser.name}
              userAccount={AdminUser.account}
              userTweetsCount={AdminUser.TweetsCount}
              userLikesCounts={AdminUser.TweetsLikedCount}
              userFollowingCount={AdminUser.FollowingsCount}
              userFollowerCount={AdminUser.TweetsLikedCount} />
          )
        })}  
        
      </div>
    </div>
  )
}

const StyledAdminPageUsersArea = styled(AdminPageUsersArea)`
  .user-card-list{
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-gap: 16px; 
  }
`

export default StyledAdminPageUsersArea