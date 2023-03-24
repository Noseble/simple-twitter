import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import StyledUserAvatar from './StyledUserAvatar';

import StyledUserInfo from './StyledUserInfo';

//Usage: <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 


//  { avatar, name, account, time, reply, like, id }
/* 導入svg圖檔 */
import { ReactComponent as Reply } from 'assets/icon/reply.svg';
import { ReactComponent as LikeButton } from 'assets/icon/likeButton.svg';

const Tweet = ({ userImageSrc, userName, userAccount, tweetTime, tweetContent, isLiked, className }) => {
	return (
		<div className={ className }>
			<StyledUserAvatar userImageSrc={userImageSrc} />
			<div className='tweet-area'>
				<div className="tweet-title">
					<StyledUserInfo userName={userName} userAccount={userAccount}/>
          <span className='tweet-time'>．{tweetTime}</span>
				</div>
				<p className='tweet-content'>
         {tweetContent}
				</p>
				<div className='footer'>
					<button><Reply className='icon' fill='#6C757D' /><label>13</label></button>
					<button><LikeButton className={clsx('icon','like-icon',{liked: isLiked})} fill='none' stroke='#6C757D' strokeWidth='2px' /><label>76</label></button>					
				</div>
			</div>
		</div>
	);
};

const StyledTweet = styled(Tweet)`
	display: flex;
	justify-content: space-between;
	padding: 16px 24px;
	width: 640px;
	border-bottom: 1px solid #E6ECF0;
	
  .tweet-area{
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    .tweet-title{
      display: flex;
      align-items: center;
      
      .tweet-time{
        color: #6C757D;
        font-size: 14px;
        line-height: 22px;
				font-weight: 400;
      }
    }

		.tweet-content{
			margin-top: 8px;
			font-size: 16px;
			line-height: 26px;
			margin: 0 auto;
		}
 
		.footer {
			display: flex;
			font-size: 14px;
			font-weight:600;
			color: #657786;
			margin-top: 8px;

			button{
				display: flex;
				justify-content: space-between;
				align-items: center; 
				background-color: white;
				border: none;
				width: 42px;
				height: 16px;
				padding: 1px;
				

				.icon{
					width:14px;
					height:14px;
					padding: 0.5px;
					cursor: pointer;

					&:hover{
						fill:#FF6600;
						stroke: #FF6600;
						shadow: 0 0 2.5px #6C757D;
					}

					&.liked{
						fill:#FF6600;
						stroke: #FF6600;
					}
				}

				&:first-child{
					margin-right: 40px;
				}
			}
		}
	}
`;

export default StyledTweet;
