import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';

//Usage: <StyledUserNavItem />

const UserNavItem = ({ className }) => {
	return (
		<div className={className}>
			<ul>
				<li>
						<input type='radio' id='contactChoice1' name='contact' />
						<label htmlFor='contactChoice1'>推文</label>
				</li>
				<li>
						<input type='radio' id='contactChoice2' name='contact' />
						<label htmlFor='contactChoice2'>回覆</label>
				</li>
				<li>
						<input type='radio' id='contactChoice3' name='contact' />
						<label htmlFor='contactChoice3'>喜歡的內容</label>
				</li>
			</ul>
		</div>
	);
};

const StyledUserNavItem = styled(UserNavItem)`
	ul {
		/* display */
		display: flex;
		flex-direction: row;
		
		/* box model & others */
		margin: 0;
		padding:0;
		list-style: none;
	}

	li {
		/* display */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		/*box model */
		width: 130px;
		height: 52px;
		padding: 15px auto;
	}

	label {
		/* box model */
		width: fit-content;
		text-align: center;
		margin: 0 auto;
		color: #657786;

		/* font & others */
		font-size: 15px;
		font-weight: 700;
		cursor: pointer;
	}

	input {
		display:none;

		&:checked ~label{
			color: #ff6600;
		}		
	}

	li:has(input:checked){
		border-bottom: 2px solid #ff6600;
	}
`;



export default StyledUserNavItem;
