import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom'; 
import styled from 'styled-components';

//Usage: <StyledUserNavItem />

const UserNavItem = ({ className }) => {
	const { userId } = useParams()
	const currentUrl = useLocation().pathname
	
	//取得現有Url最後一個字串
  const lastSegmentOfUrl = currentUrl.substring(currentUrl.lastIndexOf('/')+ 1)

	return (
		<div className={className}>
			<ul>
				<li>
				    <Link to={`/user/${userId}/tweet`} style={{ textDecoration: 'none' }}>
							<input type='radio' id='contactChoice1' name='contact' defaultChecked={lastSegmentOfUrl==='tweet' || typeof(Number(lastSegmentOfUrl))=== 'number'} />
							<label htmlFor='contactChoice1'>推文</label>
						</Link>
				</li>
				<li>
						<Link to={`/user/${userId}/reply`} style={{ textDecoration: 'none' }}>
							<input type='radio' id='contactChoice2' name='contact' defaultChecked={lastSegmentOfUrl==='reply'}/>
							<label htmlFor='contactChoice2'>回覆</label>
						</Link>
				</li>
				<li>
				    <Link to={`/user/${userId}/like`} style={{ textDecoration: 'none' }}>
							<input type='radio' id='contactChoice3' name='contact' defaultChecked={lastSegmentOfUrl==='like'}/>
							<label htmlFor='contactChoice3'>喜歡的內容</label>
						</Link>
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

		&:checked ~label,
		&:hover ~ label{
			color: #ff6600;
		}		
	}

	li:has(input:checked){
		border-bottom: 2px solid #ff6600;
	}

	li:has(input:hover){
		border-bottom: 2px solid #ff6600;
	}
`;



export default StyledUserNavItem;
