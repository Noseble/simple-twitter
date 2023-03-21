import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Mail } from 'assets/mail.svg';
import { ReactComponent as Notify } from 'assets/notify.svg';

const StyledButtonArea = styled.div`
	display: flex;
	width: 180px;
	justify-content: space-between;
	text-align: center;
	cursor: pointer;
`;

const StyledButton = styled.button`
	border-radius: 30px;
	border: none;
	padding: 10px 15px;
	color: #fff;
	background-color: #ff6600;
	font-size: 15px;
	font-weight: 700;
	line-height: 15px;
	cursor: pointer;
`;

const OtherButtonArea = () => {
	return (
		<StyledButtonArea>
			<Mail />
			<Notify />
			<StyledButton>正在跟隨</StyledButton>
		</StyledButtonArea>
	);
};

export default OtherButtonArea;
