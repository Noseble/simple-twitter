import React from 'react';
import styled from 'styled-components';

/* 導入共用元件 */
import StyledUserAvatar from './StyledUserAvatar';
import StyledUserTitle from './StyledUserTitle';


//Usage: <StyledReply userName='John' userAccount='@heyjohn' userAvatar='https://picsum.photos/300/300?text=1' replyTime='3小時' replyTo='@apple' replyContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero.'/> 

const Reply = ({ userId, userName, userAccount, userAvatar, replyTime, replyToId, replyToAccount, replyContent, className }) => {
  return(
    <div className={ className }>
		  <StyledUserAvatar userId={userId} userAvatar={userAvatar}/>
			<div className="reply-area">
				<div className="reply-title">
					<StyledUserTitle userId={userId} userName={userName} userAccount={userAccount}/>
          <span className='reply-time'>．{`${Math.floor(Number(new Date() - new Date(replyTime)) / (1000 * 60 * 60))}小時`}</span>
				</div>
          <label className='reply-to-area'>回覆 <a href={`/user/${replyToId}`} className='target-user'>{`@${replyToAccount}`}</a></label>
				<p className='reply-content'>
          {replyContent}
				</p>
			</div>
		</div>
  )
}

const StyledReply = styled(Reply)`
  display: flex;
	justify-content: space-between;
  padding: 16px 24px;
	width: 640px;
  
  .reply-area{
    display: flex;
    flex-direction: column;
    width: 100%
    margin-left: 8px;

    .reply-title{
      display: flex;
      align-items: center;
      
      .reply-time{
        color: #6C757D;
        font-size: 14px;
        line-height: 22px;
      }
    }

    .reply-to-area {
      color: #999999;
      font-size: 14px;
      line-height: 22px;
      margin: 8px 0;
 

      .target-user{
       color: #FF6600;
       text-decoration: none;

       &:hover{
        font-weight: 500;
       }
      }
    }
   
   	.reply-content{
		font-size: 16px;
		line-height: 26px;
		margin: 0 auto;
    width: 534px;
	  }


  }
`

export default StyledReply