import { React, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

//shared components
import StyledButton from './StyledButton';

//icons
import MailButton from 'assets/icon/MailButton.svg';
import NotifyButton from 'assets/icon/NotifyButton.svg';
import NotifyButtonFilled from 'assets/icon/NotifyButtonFilled.svg';

//api
import { followUser, unfollowUser } from 'api/api';
import { FollowUpdateContext } from 'contexts/FollowUpdateContext';

//Usage: <StyledOtherButtonArea isNotified={true} isFollowing={true}/> 

const OtherButtonArea = ({ userId, isNotified, isFollowed, className }) => {
	const [updateIsFollowed, setUpdateIsFollowed] = useState( isFollowed )
	const isFollowedUpdate = useContext(FollowUpdateContext)

	useEffect(() => {
    //確保isFollowed被改變實惠更新
		setUpdateIsFollowed(isFollowed)
  }, [isFollowed])

	//判斷是否快速雙擊按鍵用
  let lastClickTime = 0 

  const handleFollowshipClick = (e) => {
    const button = e.currentTarget //得到現在點擊按鈕
    const currentUserId = button.dataset.id //得到按鈕綁定的userId

    // 檢查上次事件觸發時間是否超過 500 毫秒
		if (Date.now() - lastClickTime < 500) {
			return
		}
		
		// 記錄本次事件觸發時間
		lastClickTime = Date.now()

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

		isFollowedUpdate.setIsFollowUpdate(true)

  }

	return (
		<div className={className}>
		  <button className='icon'>
		  	<img className="mail-icon" src={MailButton} alt="mail button"/>
			</button>
			{updateIsFollowed &&
				<div className={clsx('icon',{active : isNotified})}>
					<img src={isNotified? NotifyButtonFilled : NotifyButton} alt="" />
				</div>
			}
			<StyledButton className={ clsx("follow-icon", { filled: updateIsFollowed }) } onClick={handleFollowshipClick} id={userId}> {updateIsFollowed ? '正在跟隨':'跟隨'} </StyledButton>
		</div>
	);
};

const StyledOtherButtonArea = styled(OtherButtonArea)`
	display: flex;
	width: fit-content;
	justify-content: space-between;
	text-align: center;
	cursor: pointer;

	.icon{
		display:flex;
		justify-content: center;
		align-items: center;
		width:40px;
		height:40px;
		border-radius: 50%;
		border: 1px solid #FF6600;
		margin-right: 16px;
		background-color: white;
		cursor: pointer;

		img{
			filter: drop-shadow(1000px 0 0 #FF6600); 
			transform: translate(-1000px);
  	}

		&.active,
		&:hover{
			border:none;
			background-color: #FF6600;
      
			img{
				filter: drop-shadow(1000px 0 0 white); 
				transform: translate(-1000px);
			}
		}
	}
`;





export default StyledOtherButtonArea;
