import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import clsx from 'clsx';
import StyledUserAvatar from './StyledUserAvatar';

import StyledUserTitle from './StyledUserTitle';

//Usage: <StyledTweet userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userAccount='@heyjohn' tweetTime='3小時' tweetContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isLiked={true}/> 


//  { avatar, name, account, time, reply, like, id }
/* 導入svg圖檔 */
import { ReactComponent as Reply } from 'assets/icon/reply.svg';
import { ReactComponent as LikeButton } from 'assets/icon/likeButton.svg';
import StyledReplyModal from 'modals/StyledReplyModal';

const Tweet = ({ userImageSrc, userName, userAccount, tweetTime, tweetContent, isLiked, className }) => {
	const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
	
	return (
		<>
		  
				<div className={ className }>
					<StyledUserAvatar userImageSrc={userImageSrc} />
					<div className='tweet-area'>
						<div className="tweet-title">
							<StyledUserTitle userName={userName} userAccount={userAccount}/>
							<span className='tweet-time'>．{tweetTime}</span>
						</div>
						<Link to='/tweet/:tweetId' style={{ textDecoration: 'none' }}>
							<p className='tweet-content'>
							{tweetContent}
							</p>
						</Link>
						<div className='footer'>
							<button onClick={handleShowModal}><Reply className='icon' fill='#6C757D' height='14px' /><label>13</label></button>
							<StyledReplyModal show={showModal} setShow={setShowModal}/>
							<button><LikeButton className={clsx('icon','like-icon',{liked: isLiked})} fill='none' stroke='#6C757D' strokeWidth='2px' height='14px' /><label>76</label></button>					
						</div>
					</div>
				</div>
			
			
			<hr className='main-header-line'/>
		</>

	);
};

const StyledTweet = styled(Tweet)`
	display: flex;
	justify-content: space-between;
	margin: 16px 24px;
	width: 592px;
	
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
