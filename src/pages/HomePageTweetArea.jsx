import styled from "styled-components";
import { useParams } from "react-router-dom";
import clsx from "clsx";

import StyledUserAvatar from "components/StyledUserAvatar";
import StyledUserInfo from "components/StyledUserInfo";

import { ReactComponent as ReturnIcon } from 'assets/icon/returnArrow.svg';
import { ReactComponent as Reply } from 'assets/icon/reply.svg';
import { ReactComponent as LikeButton } from 'assets/icon/likeButton.svg';
import StyledReply from "components/StyledReply"

const HomePageTweetArea = ({isLiked, className}) => {
  const { tweetId } = useParams()

  return(
    <div className={className}>
      <div className='main-header'>
        <ReturnIcon className="return-icon" /><h2>推文</h2>
      </div>
      <hr className='main-header-line' />
      <div className="main-tweet">
        <div className="user-title">
          <StyledUserAvatar userImageSrc="https://picsum.photos/300/300?text=1"/>
          <StyledUserInfo className='user-info' columnArrange userName='Kevin Chou' userAccount='@kevinchou'/>
        </div>
        <div className="tweet-content">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. 
        </div>
        <div className="tweet-time">
          上午 10:05・2021年11月10日
        </div>
        <hr/>
        <div className="reply-like-count">
          <div className="count">
            34<span> 回覆</span>
          </div>
          <div className="count">
            808<span> 喜歡次數</span>
          </div>
        </div>
        <hr />
        <div className="reply-like-icon">
          <Reply className='icon' fill='#6C757D' height='24px' />
          <LikeButton className='icon liked' fill='none' stroke='#6C757D' strokeWidth='2px' height='24px'/>
        </div>
      </div>
      <hr className="main-header-line"/>
      <ul className="reply-list">
        <StyledReply userName='John' userAccount='@heyjohn' userImageSrc='https://picsum.photos/300/300?text=1' replyTime='3小時' replyTo='@apple' replyContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero.'/> 
        <hr className="main-header-line"/>
        <StyledReply userName='John' userAccount='@heyjohn' userImageSrc='https://picsum.photos/300/300?text=1' replyTime='3小時' replyTo='@apple' replyContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero.'/> 
      </ul>

    </div>
  )
}

const StyledHomePageTweetArea = styled(HomePageTweetArea)`
  .return-icon{
    margin-right: 19px;
    cursor:pointer;

    &:hover{
      fill:#FF6600;
    }
  }

  .main-tweet{
    width: 100%;
    padding: 16px;

    .user-title{
      display:flex;
      margin-bottom: 8px;

      .user-info{
        margin-left: 8px;
      }
    }

    .tweet-content{
      margin-bottom: 8px;
      font-size: 24px;
      line-height: 36px;
    }
    
    .tweet-time{
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      color: #6C757D;
      margin-bottom: 8px;
    }

  }

  hr{
    border:1px solid #E6ECF0;
  }

  .reply-like-count{
    display:flex;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    margin: 16px auto;    
    
    span{
      color: #6C757D;
    }

    & > .count:first-child{
      margin-right: 24px;
    }
  }

  .reply-like-icon{
    .icon{
      height:24px;
      margin-top: 22px;
      margin-bottom:6px;
      cursor: pointer;

      &:hover{
        fill: #FF6600;
        stroke: #FF6600;
      }
    }
    
    .icon:first-child{
      margin-right: 133px;
    }

    .liked{
      fill: #FF6600;
      stroke: #FF6600;
    }
  }
`

export default StyledHomePageTweetArea