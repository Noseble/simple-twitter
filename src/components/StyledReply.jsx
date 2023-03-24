import React from 'react';
import styled from 'styled-components';

/* 導入共用元件 */
import StyledUserAvatar from './StyledUserAvatar';
import StyledUserInfo from './StyledUserInfo';

//Usage: <StyledReply userName='John' userAccount='@heyjohn' userImageSrc='https://picsum.photos/300/300?text=1' replyTime='3小時' replyTo='@apple' replyContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero.'/> 

const Reply = ({ userName, userAccount, userImageSrc, replyTime, replyTo, replyContent, className }) => {
  return(
    <div className={ className }>
		  <StyledUserAvatar userImageSrc={userImageSrc}/>
			<div className="reply-area">
				<div className="reply-title">
					<StyledUserInfo userName={userName} userAccount={userAccount}/>
          <span className='reply-time'>．{replyTime}</span>
				</div>
          <label className='reply-to-area'>回覆 <span className='target-user'>{replyTo}</span></label>
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
  height: 148px;
  
  .reply-area{
    display: flex;
    flex-direction: column;
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
      }
    }
   
   	.reply-content{
		font-size: 16px;
		line-height: 26px;
		margin: 0 auto;
	  }


  }
`

export default StyledReply