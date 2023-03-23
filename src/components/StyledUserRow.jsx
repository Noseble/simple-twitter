import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import StyledUserAvatar from './StyledUserAvatar';

const UserRow = ({ className }) => {
	return (
		<div className={ className }>
			<StyledUserAvatar userImageSrc={'https://picsum.photos/300/300?text=1'} />
			<div className='content'>
				<div className='title'>
					<label>Jhon</label>
          <StyledButton className="tweet_button">正在跟隨</StyledButton>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis
					fuga, unde vitae vero. Qui, cupiditate?
				</p>
			</div>
		</div>
	);
};

const StyledUserRow = styled(UserRow)`
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	padding: 8px 16px;
	width: 500px;
	outline: 1px solid #E6ECF0;

	p {
		font-size: 14px;
		font-weight: 300;
		margin: 0 auto;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin-left: 10px;

  label {
		color: #999999;
		font-size: 15px;
		font-weight: 500;
	}
	}

	.title{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 30px;
	
	label:first-child{
		margin-right: 5px;
		color: black;
		font-weight: 700;
	}
	}
`;

export default StyledUserRow;
