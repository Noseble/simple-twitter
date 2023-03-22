import styled, { css } from 'styled-components';

//Usage: <StyledUserInfo (columnArrange) userName='Kevin Chou' userAccount='@kevinchou' />

const UserInfo = ({ userName, userAccount, className }) => {
  return(
    <a href="/" className={ className }>
     <p className='user_name'>{userName}</p>
     <p className='user_account'>{userAccount}</p>
    </a>
  )
}

const StyledUserInfo = styled(UserInfo)`
  display: block;
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
    
  p{
    margin:0;
  }

  .user_name{
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color:#171725;
  }

  .user_account{
    margin-left: 8px;
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color:#6C757D;
  }

  ${props=>props.columnArrange && css`
    flex-direction: column ;
    align-items: start;

    .user_account{
      margin-left:0;
    }
  `}
`

export default StyledUserInfo