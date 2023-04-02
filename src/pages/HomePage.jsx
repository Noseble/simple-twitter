import { React, useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

import StyledButton from "components/StyledButton";
import StyledNavItem from "components/StyledNavItem";
import {ReactComponent as AcLogo} from 'assets/icon/AcLogo.svg'
import StyledPopularUser from "components/StyledPopularUser";
import StyledTweetModal from "modals/StyledTweetModal";

import { getTopTen, getUser } from "api/api";
import { UserInfoContext } from "contexts/UserInfoContext";
import { FollowUpdateContext } from "contexts/FollowUpdateContext";
import { UserInfoUpdateContext } from "contexts/UserInfoUpdateContext";

const HomePage = ({className}) => {
  const navigate = useNavigate();
  const [showTweetModal, setShowTweetModal] = useState(false);
  const myId = sessionStorage.getItem('myId')
  const [userInfo, setUserInfo] = useState({})
  const [topTenList, setTopTenList] = useState([]);
  const currentUrlPath = useLocation().pathname
  const [isFollowUpdate, setIsFollowUpdate] = useState(true)
  const [isEdited, setIsEdited] = useState(true)

  const handleShowTweetModal = () => setShowTweetModal(true);
  
  const handleLogOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('myId')
    navigate('login')
  }
  
  const getUserInfo = async(id)=>{
    try{
      const res = await getUser(id)
      setUserInfo(res)
    }catch(error){
      console.error(error)
    }
  }

  const getTopTenAsync = async() => {
    try {
      const res = await getTopTen();
      const newTopTenIds = res.users.map(user=>user.id);
      const newTopTenUsers = await Promise.all(newTopTenIds.map(userId => getUser(userId)));
      setTopTenList(newTopTenUsers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //若沒登入，則導至login頁面
    const auth = sessionStorage.getItem('token')
    if(auth===null){
      navigate('login')
    }

    getUserInfo(myId)
    getTopTenAsync();

    if(isFollowUpdate || isEdited){
      getTopTenAsync();
      setIsFollowUpdate(false);
    }
    
  }, [navigate,myId,isEdited, isFollowUpdate]);

  return(
    <FollowUpdateContext.Provider value={{isFollowUpdate, setIsFollowUpdate}}>
    <UserInfoUpdateContext.Provider value={{isEdited, setIsEdited}}>
      <div className={clsx('web-container', className)}>

        <nav className="nav-column">
          <div className="nav-main">
            <div className="aclogo">
              <AcLogo className="website-logo" />
            </div>
            <div className="nav-list">
              <Link to='/' style={{ textDecoration: 'none' }}><StyledNavItem navTitle='首頁' className={clsx({selected: currentUrlPath==='/'})}/></Link>
              <Link to={`/user/${myId}`} style={{ textDecoration: 'none' }}><StyledNavItem navTitle='個人資料' className={clsx({selected: currentUrlPath.includes('user')})}/></Link>
              <Link to='/setting' style={{ textDecoration: 'none' }}><StyledNavItem navTitle='設定' className={clsx({selected: currentUrlPath==='/setting'})}/></Link>
            </div>
            <StyledButton className='filled' width='100%' onClick={handleShowTweetModal}>推文</StyledButton>
            <StyledTweetModal userId={userInfo.id} userAvatar={userInfo.avatar} show={showTweetModal} setShow={setShowTweetModal} />
          </div>
          <StyledNavItem className='exit-nav-item' onClick={handleLogOut} navTitle='登出' />
        </nav>

        <UserInfoContext.Provider value={userInfo}>      
          <div className='main-scrollbar'>
            <div className='main-container'>
              <Outlet/> {/* 子路由頁面由此放入 */}
            </div>
          </div>
        </UserInfoContext.Provider>

        <div className='side-column'>
          <div className={clsx('popular-list-area',{hidden: currentUrlPath==='/setting'})}>
            <h2 className="popular-list-title">推薦跟隨</h2>
            <hr className="popular-list-hr"/>
            <div className="popular-list">
              {topTenList?.map((user) => {
                return(
                  <StyledPopularUser key={user?.id} userId={user?.id} userAvatar={user?.avatar} userName={user?.name} userAccount={user?.account} isFollowed={user?.isFollowed}/>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </UserInfoUpdateContext.Provider>
    </FollowUpdateContext.Provider>
  )
}

const StyledHomepage= styled(HomePage)`
  /* error的樣式 */
  .Toastify__toast-container {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    width: 402px;
    height: 104px;
  }
  
  .modal-portal{
    position:absolute;
    top: 56px;
    left: 205px;
    width: 635px;
    border: 1px solid red;
  }

  .popular-list-area{
    width:100%;
    background-color: #FAFAFB;
    border-radius: 16px;
    margin-top: 16px;

    &.hidden{
      visibility: hidden;
    }
  }
  
  .popular-list-title{
    line-height: 74px;
    margin-left: 24px;
  }

  .popular-list-hr{
    margin:0;
    border:1px solid #E6ECF0;
  }

  .popular-list{
    width: 100%;
    height: fit-content;
    padding: 8px 0;
  }
`

export default StyledHomepage