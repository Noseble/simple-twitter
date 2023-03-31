import styled from 'styled-components';
import clsx from 'clsx';

/* import shared components */
import StyledUserAvatar from './StyledUserAvatar';
import StyledUserTitle from './StyledUserTitle';
import StyledButton from './StyledButton';
import { followUser, unfollowUser } from 'api/api';
import { useEffect, useState } from 'react';

//Usage: <StyledPopularUser userName='Pizza Hut' userAccount='pizzahut' isFollowed={true} /> 

const PopularUser = ({ userId, userAvatar, userName, userAccount, isFollowed, className }) => {
  const myId = localStorage.getItem('MyId')
  const [updateIsFollowed, setUpdateIsFollowed] = useState(isFollowed)
  
  useEffect(()=>{
    //確保isFollowed有更新時更新畫面
    setUpdateIsFollowed(isFollowed)
  },[isFollowed])

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
  
  return(
    <div className={className}>
      <div className={ clsx('popular-user', {small:updateIsFollowed}, {large: !updateIsFollowed})}>
        <StyledUserAvatar userId={userId} userAvatar={userAvatar} className="popular-user-avatar"/>
        <StyledUserTitle className="popular-user-info" columnArrange userId={userId} userName={userName} userAccount={`${userAccount}`} />
      </div>
      <StyledButton className={clsx('popular-user-button',{filled: updateIsFollowed && parseInt(userId) !== parseInt(myId)})} disabled={parseInt(userId) === parseInt(myId)} width={updateIsFollowed ? '96px' : 'fit-content'} onClick={handleFollowshipClick} id={userId}> {updateIsFollowed ? '正在跟隨' : '跟隨'}</StyledButton>
    </div>
  )
}

const StyledPopularUser = styled( PopularUser )`
  /* display */
  display:flex;
  justify-content:space-between;
  align-items:center;

  /* box model */
  width:241px;
  height:50px;
  margin: 16px;

  .popular-user{
    display:flex;
    align-items:center;
    overflow: hidden;

    &.small{
      width: 140px;
    }

    &.large{
      width: 172px;
    }
  }

  .popular-user-avatar{
    width:50px;
    height:50px;
  }

  .popular-user-info{
    margin-left: 8px;
  }

  .popular-user-button{
    width: fit-content;
  }
`

export default StyledPopularUser
