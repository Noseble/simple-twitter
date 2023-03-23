import React from 'react';
import styled from 'styled-components';

const UserNavItem = ({ className }) => {
	return (
		<div className={className}>
			<ul>
				<li>
					<input type='radio' id='contactChoice1' name='contact' />
					<label htmlFor='contactChoice1'>推文</label>
					<hr />
				</li>
				<li>
					<input type='radio' id='contactChoice2' name='contact' />
					<label htmlFor='contactChoice2'>回覆</label>
					<hr />
				</li>
				<li>
					<input type='radio' id='contactChoice3' name='contact' />
					<label htmlFor='contactChoice3'>喜歡的內容</label>
					<hr />
				</li>
			</ul>
		</div>
	);
};

const StyledUserNavItem = styled(UserNavItem)`
	ul {
		display: flex;
		flex-direction: row;
		margin: 5px 0;
		list-style: none;
	}

	li {
		padding: 15px 25px;
		border-bottom: 1px solid #e6ecf0;
		position: relative;
	}

	label {
		margin-right: 20px;
		color: #657786;
		font-size: 15px;
		font-weight: 700;
		font-family: Noto Sans TC;
		cursor: pointer;
	}

	hr {
		display: none;
	}

	input {
		visibility: hidden;
	}

	input:checked ~ label {
		color: #ff6600;
	}

	input:checked ~ hr {
    position: absolute;
		display: block;
		border: 1px solid #ff6600;
		top: 85%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100px;
	}
`;



export default StyledUserNavItem;
