import React from 'react';
import styled from 'styled-components';
/* 導入svg圖檔 */
import { ReactComponent as Reply } from 'assets/icon/reply.svg';
import { ReactComponent as Like } from 'assets/icon/like.svg';

const StyledTweet = styled.div`
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	padding: 8px 16px;
	width: 500px;
	outline: 1px solid black;
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-top: 10px;
	}
	p {
		font-size: 14px;
		font-weight: 300;
		margin: 0 auto;
	}
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
`;

const StyledTitle = styled.div`
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
`;

const StyledTweetFooter = styled.div`
	display: flex;
	font-size: 13px;
	color: #657786;
	width: 100px;
	justify-content: space-between;
	margin-top: 5px;

	label {
		display: flex;
		align-items: center; 
	}
	svg {
		margin-right: 5px;
	}
`




// const dummyData =[
//   {
//   avatar:'https://picsum.photos/300/300?text=1',
//   name: 'Jhon',
//   account: '@heyjhon',
//   time: '3小時',
//   reply: 13,
//   like: 76,
//   id: 1
//   }
// ] { avatar, name, account, time, reply, like, id }

const Tweet = () => {
	return (
		<StyledTweet>
			<img src='https://picsum.photos/300/300?text=1' />
			<StyledContent>
				<StyledTitle>
					<label>Jhon<span>@heyjhon．3 小時</span></label>
				</StyledTitle>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis
					fuga, unde vitae vero. Qui, cupiditate?
				</p>
				<StyledTweetFooter>
					<label><Reply />13</label>
					<label><Like />76</label>					
				</StyledTweetFooter>
			</StyledContent>
		</StyledTweet>
	);
};

export default Tweet;
