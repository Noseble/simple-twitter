import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

/* 導入svg圖檔 */
import { ReactComponent as Mail } from 'assets/icon/mail.svg';
import { ReactComponent as Notify } from 'assets/icon/notify.svg';

const StyledButtonArea = styled.div`
	display: flex;
	width: 180px;
	justify-content: space-between;
	text-align: center;
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
