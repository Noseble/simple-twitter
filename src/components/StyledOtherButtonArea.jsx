import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

/* 導入svg圖檔 */
import { ReactComponent as Mail } from 'assets/icon/mail.svg';
import { ReactComponent as Notify } from 'assets/icon/notify.svg';

const OtherButtonArea = ({ className }) => {
	return (
		<div className={className}>
			<Mail />
			<Notify />
			<StyledButton>正在跟隨</StyledButton>
		</div>
	);
};

const StyledOtherButtonArea = styled(OtherButtonArea)`
	display: flex;
	width: 180px;
	justify-content: space-between;
	text-align: center;
	cursor: pointer;
`;





export default StyledOtherButtonArea;
