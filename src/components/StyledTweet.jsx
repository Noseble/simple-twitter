import React from 'react';
import styled from 'styled-components';
import StyledUserAvatar from './StyledUserAvatar';
/* 導入svg圖檔 */
import { ReactComponent as Reply } from 'assets/icon/reply.svg';
import { ReactComponent as Like } from 'assets/icon/like.svg';


const Tweet = ({ className }) => {
	return (
		<div className={ className }>
			<StyledUserAvatar userImageSrc={'https://picsum.photos/300/300?text=1'} />
			<div className='content'>
				<div className='title'>
					<label>Jhon<span>@heyjhon．3 小時</span></label>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis
					fuga, unde vitae vero. Qui, cupiditate?
				</p>
				<div className='footer'>
					<label><Reply />13</label>
					<label><Like />76</label>					
				</div>
			</div>
		</div>
	);
};

const StyledTweet = styled(Tweet)`
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	padding: 8px 16px;
	width: 500px;
	border-bottom: 1px solid #E6ECF0;
	
	p {
		font-size: 14px;
		font-weight: 300;
		margin: 0 auto;
	}

	.content{
		display: flex;
		flex-direction: column;
		margin-left: 10px;
	}

	.title{
		display: flex;
		align-items: center;
		height: 30px;
	
	label:first-child{
		margin-right: 5px;
		color: black;
		font-weight: 700;
	}

	label span {
		color: #999999;
		font-size: 15px;
		font-weight: 500;
		
	}
}

	.footer {
		display: flex;
		font-size: 13px;
		color: #657786;
		width: 100px;
		justify-content: space-between;
		margin-top: 5px;
	}

	label {
		display: flex;
		align-items: center; 
	}

	svg {
		margin-right: 5px;
	}
`;



//  { avatar, name, account, time, reply, like, id }


export default StyledTweet;
