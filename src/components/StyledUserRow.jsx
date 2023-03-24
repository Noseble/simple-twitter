import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import StyledButton from './StyledButton';
import StyledUserAvatar from './StyledUserAvatar';

//Usage: <StyledUserRow userImageSrc='https://picsum.photos/300/300?text=1' userName='John' userContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isFollowing={false}/>

const UserRow = ({ userImageSrc, userName, userContent, isFollowing, className }) => {
	return (
		<div className={ className }>
			<StyledUserAvatar userImageSrc={userImageSrc} />
			<div className='user-area'>
				<div className='user-header'>
					<label>{userName}</label>
          <StyledButton className={clsx({filled: isFollowing})}>{isFollowing? '正在跟隨' : '跟隨'}</StyledButton>
				</div>
				<p className='user-content'>
				  {userContent}
				</p>
			</div>
		</div>
	);
};

const StyledUserRow = styled(UserRow)`
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	padding: 10px 29px 16px 24px;
	width: 640px;
	outline: 1px solid #E6ECF0;

	p {
		font-size: 14px;
		font-weight: 300;
		margin: 0 auto;
	}

	.user-area {
		display: flex;
		flex-direction: column;
		margin-left: 8px;

		.user-content{
			margin-top: 8px;
		}
	}

	.user-header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
	
		label:first-child{
			margin-right: 5px;
			color: #171725;
			font-size: 16px;
			line-height:26px;
			font-weight: 700;
		}
	}
`;

export default StyledUserRow;
