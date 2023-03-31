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

const HomePage = ({className}) => {
  const navigate = useNavigate();
  const [showTweetModal, setShowTweetModal] = useState(false);
  const myId = localStorage.getItem('MyId')
  const [userInfo, setUserInfo] = useState({})
  const [topTenList, setTopTenList] = useState([]);
  const currentUrlPath = useLocation().pathname

  const handleShowTweetModal = () => setShowTweetModal(true);
  
  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('MyId')
    navigate('login')
  }

  useEffect(() => {
    //若沒登入，則導至login頁面
    const auth = localStorage.getItem('token')
    if(auth===null){
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

    getUserInfo(myId)
    getTopTenAsync();
  }, [navigate,myId]);

  return(
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
            {topTenList.map((user) => {
              return(
                <StyledPopularUser key={user.id} userId={user.id} userAvatar={user.avatar} userName={user.name} userAccount={user.account} isFollowed={user.isFollowed}/>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

const StyledHomepage= styled(HomePage)`
  .modal-portal{
    position:absolute;
    top: 56px;
    left: 205px;
    width: 635px;
    border: 1px solid red;
  }

  .popular-list-area{
    width:100%;
    max-height: 731px;
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
  }
`

export default StyledHomepage