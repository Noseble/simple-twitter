import styled from 'styled-components';
import clsx from 'clsx';

/* import shared components */
import StyledUserAvatar from './StyledUserAvatar';
import StyledUserTitle from './StyledUserTitle';
import StyledButton from './StyledButton';

//Usage: <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={true} /> 

const PopularUser = ({userName,userAccount,isFollowing,className}) => {
  return(
    <div className={className}>
      <div className={ clsx('popular-user', {small:isFollowing}, {large: !isFollowing})}>
        <StyledUserAvatar className="popular-user-avatar"/>
        <StyledUserTitle className="popular-user-info" columnArrange userName={userName} userAccount={`${userAccount}`} />
      </div>
      <StyledButton className={clsx('popular-user-button',{filled: isFollowing})} width={isFollowing ? '96px' : 'fit-content'} > {isFollowing ? '正在跟隨' : '跟隨'}</StyledButton>
    </div>
  )
}

const StyledPopularUser = styled( PopularUser )`
  /* display */
  display:flex;
  justify-content:space-between;
  align-items:center;

  /* box model */
  width:241px;
  height:50px;
  margin: 16px;

  .popular-user{
    display:flex;
    align-items:center;

    &.small{
      width: 140px;
    }

    &.large{
      width: 172px;
    }
  }

  .popular-user-avatar{
    width:50px;
    height:50px;
  }

  .popular-user-info{
    margin-left: 8px;
  }

  .popular-user-button{
    width: fit-content;
  }
`

export default StyledPopularUser
