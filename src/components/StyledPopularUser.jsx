import styled from 'styled-components';

/* import shared components */
import StyledUserAvatar from './StyledUserAvatar';
import StyledUserInfo from './StyledUserInfo';
import StyledButton from './StyledButton';

//Usage: <StyledPopularUser userName='Kevin Chou' userAccount='@kevinchou' isFollowing={false} />

const PopularUser = ({userName,userAccount,isFollowing,className}) => {
  return(
    <div className={className}>
      <div className="popular_user">
        <StyledUserAvatar className="popular_user_avatar"/>
        <StyledUserInfo className="popular_user_info" columnArrange userName={userName} userAccount={userAccount} />
      </div>
      { isFollowing === true ?
      <StyledButton className="popular_user_button" width="96px">正在跟隨</StyledButton> : 
      <StyledButton className="popular_user_button"outlined width="64px">跟隨</StyledButton> }
    </div>
  )
}

const StyledPopularUser = styled( PopularUser )`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:241px;
  height:50px;
  margin: 16px;

  .popular_user{
    display:flex;
    align-items:center;
  }

  .popular_user_avatar{
    width:50px;
    height:50px;
  }

  .popular_user_info{
    margin-left: 8px;
  }

  .popular_user_button{
    justify-self: end;

  }
`

export default StyledPopularUser
