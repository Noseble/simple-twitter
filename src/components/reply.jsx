import React from 'react';
import styled from 'styled-components';

const StyledReply = styled.div`
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
  label {
		color: #999999;
		font-size: 15px;
		font-weight: 500;
	}
  label span {
    color: #FF6600;
    margin-left: 2px;
  }
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






const Reply = () => {
	return (
		<StyledReply>
			<img src='https://picsum.photos/300/300?text=1' />
			<StyledContent>
				<StyledTitle>
					<label>Jhon<span>@heyjhon．3 小時</span></label>
				</StyledTitle>
          <label>回覆<span>@apple</span></label>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis
					fuga, unde vitae vero. Qui, cupiditate?
				</p>
			</StyledContent>
		</StyledReply>
	);
};

export default Reply;
