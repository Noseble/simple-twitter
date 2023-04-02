import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

//Usage: <StyledUserTitle (columnArrange) userName='Kevin Chou' userAccount='@kevinchou' /> 

const UserTitle = ({ userId, userName, userAccount, className }) => {
  
  return(
    <Link to={ className.includes('admin') ? null : `/user/${userId}`} className={ className }>
     <p className='user-name'>{userName}</p>
     <p className='user-account'>{`@${userAccount}`}</p>
    </Link>
  )
}

const StyledUserTitle = styled(UserTitle)`
  display: block;
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
    
  p{
    margin:0;
  }

  .user-name{
    height: 26px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color:#171725;
    overflow: hidden;
  }

  .user-account{
    height: 22px;
    margin-left: 8px;
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    color:#6C757D;
    overflow: hidden;
  }

  ${props=>props.columnArrange && css`
    flex-direction: column ;
    align-items: start;

    .user-account{
      margin-left:0;
    }
  `}

  &:hover{
    .user-name{
      font-weight: 800;
    }

    .user-account{
      font-weight: 500;
    }
  }

  &.admin{
    cursor: default;
    &:hover{
      .user-name{
        font-weight: 700;
      }

      .user-account{
        font-weight: 400;
      }
    }
  }
`

export default StyledUserTitle