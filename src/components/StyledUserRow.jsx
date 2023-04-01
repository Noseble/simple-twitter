import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import StyledButton from './StyledButton';
import StyledUserAvatar from './StyledUserAvatar';
import { Link } from 'react-router-dom';
import { followUser, unfollowUser } from 'api/api';

//Usage: <StyledUserRow userAvatar='https://picsum.photos/300/300?text=1' userName='John' userIntroduction='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eaque maxime quaerat perspiciatis fuga, unde vitae vero. Qui, cupiditate?' isFollowed={false}/>

const UserRow = ({ userId, userAvatar, userName, userIntroduction, isFollowed, className }) => {
	const myId = localStorage.getItem('MyId')
	const [updateIsFollowed, setUpdateIsFollowed] = useState(isFollowed)
	
	//判斷是否快速雙擊按鍵用
  let lastClickTime = 0 

  const handleFollowshipClick = (e) => {
    const button = e.currentTarget
    const currentUserId = button.dataset.id

    // 檢查上次事件觸發時間是否超過 500 毫秒
		if (Date.now() - lastClickTime < 500) {
			return;
		}
		
		// 記錄本次事件觸發時間
		lastClickTime = Date.now();

    if(button.className.includes('filled')){
      //取消追蹤
      const unfollowCurrentUser = async(id) => {
        try{
          const res = await unfollowUser(id)
          if(res){
            setUpdateIsFollowed(false)
          }
        }catch(error){
          console.error(error)
        }
      }
      unfollowCurrentUser(currentUserId)
    }else{
      //追蹤
      const followCurrentUser = async(id) => {
        try{
          const res = await followUser(id)
          if(res){
            setUpdateIsFollowed(true)
          }
        }catch(error){
          console.error(error)
        }
      }
      followCurrentUser(currentUserId)
    }
  }
	
	return (
		<div className={ className }>
			<StyledUserAvatar userId={userId} userAvatar={userAvatar} />
			<div className='user-area'>
				<div className='user-header'>
					<Link to={`/user/${userId}`} style={{ textDecoration: 'none' }}><label className='user-title'>{userName}</label></Link>
          <StyledButton className={clsx('follow-button',{filled: updateIsFollowed},{hidden:parseInt(userId) === parseInt(myId)})} onClick={handleFollowshipClick} id={userId}>{updateIsFollowed? '正在跟隨' : '跟隨'}</StyledButton>
				</div>
				<p className='user-content'>
				  {userIntroduction}
				</p>
			</div>
		</div>
	);
};

const StyledUserRow = styled(UserRow)`
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	padding: 10px 29px 16px 24px;
	width: 640px;
	outline: 1px solid #E6ECF0;

	p {
		font-size: 14px;
		font-weight: 300;
	}

	.user-area {
		display: flex;
		flex-direction: column;
		margin-left: 8px;
		width: 100%;

		.user-content{
			display:flex;
			text-align: start;
			margin-top: 8px;
		}
	}

	.user-header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;

		.user-title{
			cursor: pointer;
			
			&:hover{
				font-weight: 500;
			}
		}

		.follow-button.{
			&.hidden{
      visibility: hidden;
		}
	
		label:first-child{
			margin-right: 5px;
			color: #171725;
			font-size: 16px;
			line-height:26px;
			font-weight: 700;
			cursor: pointer;
		}
	}
`;

export default StyledUserRow;
