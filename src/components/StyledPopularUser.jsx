import styled from 'styled-components';
import clsx from 'clsx';

/* import shared components */
import StyledUserAvatar from './StyledUserAvatar';
import StyledUserTitle from './StyledUserTitle';
import StyledButton from './StyledButton';

//Usage: <StyledPopularUser userName='Pizza Hut' userAccount='pizzahut' isFollowed={true} /> 

const PopularUser = ({ userId, userAvatar, userName, userAccount, isFollowed, className }) => {
  return(
    <div className={className}>
      <div className={ clsx('popular-user', {small:isFollowed}, {large: !isFollowed})}>
        <StyledUserAvatar userId={userId} userAvatar={userAvatar} className="popular-user-avatar"/>
        <StyledUserTitle className="popular-user-info" columnArrange userId={userId} userName={userName} userAccount={`${userAccount}`} />
      </div>
      <StyledButton className={clsx('popular-user-button',{filled: isFollowed})} width={isFollowed ? '96px' : 'fit-content'} > {isFollowed ? '正在跟隨' : '跟隨'}</StyledButton>
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
    overflow: hidden;

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
