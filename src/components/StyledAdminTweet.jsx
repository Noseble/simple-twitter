import styled from "styled-components";

//shared components
import StyledUserAvatar from "./StyledUserAvatar";
import StyledUserTitle from "./StyledUserTitle";

//icons
import {ReactComponent as DeleteButton} from "assets/icon/cross.svg"

//Usage: <StyledAdminTweet userAvatar='https://picsum.photos/300/300?text=1' userName='Kevin Chou' userAccount='@kevinchou' tweetTime= tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?'/>

const AdminTweet = ({ userAvatar, userName, userAccount, tweetTime, tweetContent,  onClick, className}) => {
  return(
    <div className={className}>
      <StyledUserAvatar className='user-avatar admin' userAvatar={userAvatar} />
      <div className="tweet-area">
        <div className="header">
          <div className="user-info">
            <StyledUserTitle className='admin' userName={userName} userAccount={`${userAccount}`}/>
            <span className='tweet-time'>．{tweetTime}</span>
          </div>
        </div>
        <p className="tweet-content">
          {tweetContent.slice(0, 50)}
          {tweetContent.length >= 50 && '...'}
        </p>
      </div>
      <DeleteButton className="delete-icon" fill='#696974'  onClick={onClick} />
    </div>
  )
}

const StyledAdminTweet = styled(AdminTweet)`
  /* position & display */
  position: relative;
  display:flex;
  
  /* box model */
  width: 936px;
  height: fit-content;
  padding: 16px 24px;
  border-bottom: 1px  solid #E6ECF0;
  
  .tweet-area{
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    width: 830px;
    
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
      width: 100%;
      margin: 8px 0 0;
			font-size: 16px;
			line-height: 26px;
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
    cursor: pointer;

    &:hover{
      fill: #FF6600;
    }
  }
`

export default StyledAdminTweet