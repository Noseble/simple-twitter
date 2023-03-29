import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import StyledButton from './StyledButton';
import StyledUserAvatar from './StyledUserAvatar';
import { Link } from 'react-router-dom';

//Usage: <StyledUserRow userAvatar='https://picsum.photos/300/300?text=1' userName='John' userIntroduction='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isFollowed={false}/>

const UserRow = ({ userId, userAvatar, userName, userIntroduction, isFollowed, className }) => {
	return (
		<div className={ className }>
			<StyledUserAvatar userId={userId} userAvatar={userAvatar} />
			<div className='user-area'>
				<div className='user-header'>
					<Link to={`/user/${userId}`} style={{ textDecoration: 'none' }}><label>{userName}</label></Link>
          <StyledButton className={clsx({filled: isFollowed})}>{isFollowed? '正在跟隨' : '跟隨'}</StyledButton>
				</div>
				<p className='user-content'>
				  {userIntroduction}
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
		width: 100%;

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
			cursor: pointer;
		}
	}
`;

export default StyledUserRow;
