import styled from "styled-components";
import StyledUserAvatar from "./StyledUserAvatar";
import StyledUserInfo from "./StyledUserInfo";

import {ReactComponent as DeleteButton} from "assets/icon/cross.svg"

//Usage: <StyledAdminTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='Kevin Chou' userAccount='@kevinchou' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?'/>

const AdminTweet = ({userImageSrc, userName, userAccount, tweetTime, tweetContent, className}) => {
  return(
    <div className={className}>
      <StyledUserAvatar userImageSrc={userImageSrc}/>
      <div className="tweet-area">
        <div className="header">
          <div className="user-info">
            <StyledUserInfo userName={userName} userAccount={userAccount}/>
            <span className='tweet-time'>．{tweetTime}</span>
          </div>
        </div>
        <p className="tweet-content">
          {tweetContent}
        </p>
      </div>
      <DeleteButton className="delete-icon" fill='#696974'/>
    </div>
  )
}

const StyledAdminTweet = styled(AdminTweet)`
  /* position & display */
  position: relative;
  display:flex;
  
  /* box model */
  width: 936px;
  height: 118px;
  padding: 16px 24px;
  border-bottom: 1px  solid #E6ECF0;


  .tweet-area{
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    
    .header{
      /* display */
      display: flex;
      justify-content: space-between;
      align-items: center;

      /* box model */
      height: 26px;
      width: 100%;
      
      .user-info{
        display: flex;
        align-items: center;

        .tweet-time{
          color: #6C757D;
          font-size: 14px;
          line-height: 22px;
          font-weight: 400;
        }
      }
    }

    .tweet-content{
      margin-top: 8px;
			font-size: 16px;
			line-height: 26px;
			margin: 0 auto;
    }
  }

  .delete-icon{
    /* position */
    position: absolute;
    top: 29px;
    right: 0;

    /* others */
    margin: 4.5px;
    transform: translate(-50%, -50%);

    &:hover{
      fill: #FF6600;
    }
  }
`

export default StyledAdminTweet