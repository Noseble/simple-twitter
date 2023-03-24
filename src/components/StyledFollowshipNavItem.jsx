import React from 'react';
import styled from 'styled-components';

//Usage: <StyledFollowshipNavItem/>

const FollowshipNavItem = ({ className }) => {
	return (
		<div className={className}>
			<ul>
				<li>
					<input type='radio' id='followshipChoice1' name='contact' />
					<label htmlFor='followshipChoice1'>追隨者</label>
				</li>
				<li>
					<input type='radio' id='followshipChoice2' name='contact' />
					<label htmlFor='followshipChoice2'>正在追隨</label>
				</li>
			</ul>
		</div>
	);
};

const StyledFollowshipNavItem = styled(FollowshipNavItem)`
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

export default StyledFollowshipNavItem
