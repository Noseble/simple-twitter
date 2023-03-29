import React from 'react';
import styled, { css } from 'styled-components';
import clsx from 'clsx';

/* 導入共用元件 */
import StyledButton from './StyledButton';

/* 導入svg圖檔 */
import MailButton from 'assets/icon/MailButton.svg';
import NotifyButton from 'assets/icon/NotifyButton.svg';
import MailButtonFilled from 'assets/icon/MailButtonFilled.svg';
import NotifyButtonFilled from 'assets/icon/NotifyButtonFilled.svg';

//Usage: <StyledOtherButtonArea isNotified={true} isFollowing={true}/> 

const OtherButtonArea = ({ isNotified, isFollowing, className }) => {
	return (
		<div className={className}>
		  <button className='icon'>
		  	<img className="mail-icon" src={MailButton}/>
			</button>
			{isFollowing &&
				<div className={clsx('icon',{active : isNotified})}>
					<img src={isNotified? NotifyButtonFilled:NotifyButton} />
				</div>
			}
			<StyledButton className={ clsx("follow-icon", { filled: isFollowing }) }> {isFollowing ? '正在跟隨':'跟隨'} </StyledButton>
		</div>
	);
};

const StyledOtherButtonArea = styled(OtherButtonArea)`
	display: flex;
	width: fit-content;
	justify-content: space-between;
	text-align: center;
	cursor: pointer;

	.icon{
		display:flex;
		justify-content: center;
		align-items: center;
		width:40px;
		height:40px;
		border-radius: 50%;
		border: 1px solid #FF6600;
		margin-right: 16px;
		background-color: white;
		cursor: pointer;

		img{
			filter: drop-shadow(1000px 0 0 #FF6600); 
			transform: translate(-1000px);
  	}

		&.active,
		&:hover{
			border:none;
			background-color: #FF6600;
      
			img{
				filter: drop-shadow(1000px 0 0 white); 
				transform: translate(-1000px);
			}
		}
	}
`;





export default StyledOtherButtonArea;
