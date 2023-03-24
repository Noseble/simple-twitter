import styled from "styled-components";
import StyledUserCard from "components/StyledUserCard"


const AdminPageUsersArea = ({ className }) => {

  return (
    
      <div className="main-list-container">
        <div className="main-header">
          <h2>使用者列表</h2>
        </div>
        <hr className="main-header-line"/>
        <div className={className}>
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />

        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />

        <StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        /><StyledUserCard 
        bgImageSrc={'https://is.gd/HLYrRZ'}
        userImageSrc={'https://is.gd/3z1Ubr'}
        userName={'Adam'}
        userAccount={'@adam666'}
        userTweetsCount={'5000'}
        userLikesCounts={'2000'}
        userFollowingCount={'100'}
        userFollowerCount={'110'}
        />
      </div>
    </div>
  )
}

const StyledAdminPageUsersArea = styled(AdminPageUsersArea)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 16px; 
  margin-top: 16px;
`

export default StyledAdminPageUsersArea