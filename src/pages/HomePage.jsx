import { React, useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

import StyledButton from "components/StyledButton";
import StyledNavItem from "components/StyledNavItem";
import {ReactComponent as AcLogo} from 'assets/icon/AcLogo.svg'
import StyledPopularUser from "components/StyledPopularUser";
import StyledTweetModal from "modals/StyledTweetModal";

import { getTopTen, getUser } from "api/api";

const HomePage = ({className}) => {
  const MyId = localStorage.getItem('MyId')
  const navigate = useNavigate();
  const [showTweetModal, setShowTweetModal] = useState(false);
  const [topTenList, setTopTenList] = useState([]);

  const handleShowTweetModal = () => setShowTweetModal(true);
  
  const handleLogOutClick = () => {
    localStorage.removeItem('token')
    navigate('login')
  }

  useEffect(() => {
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
    getTopTenAsync();
  }, []);

  return(
    <div className={clsx('web-container', className)}>

      <nav className="nav-column">
        <div className="nav-main">
          <div className="aclogo">
            <AcLogo className="website-logo" />
          </div>
          <div className="nav-list">
            <Link to='/' style={{ textDecoration: 'none' }}><StyledNavItem navTitle='首頁' /></Link>
            <Link to={`/user/${MyId}`} style={{ textDecoration: 'none' }}><StyledNavItem navTitle='個人資料' /></Link>
            <Link to='/setting' style={{ textDecoration: 'none' }}><StyledNavItem navTitle='設定' /></Link>
          </div>
          <StyledButton className='filled' width='100%' onClick={handleShowTweetModal}>推文</StyledButton>
          <StyledTweetModal show={showTweetModal} setShow={setShowTweetModal} />
        </div>
        <StyledNavItem className='exit-nav-item' onClick={handleLogOutClick} navTitle='登出' />
      </nav>

      <div className='main-scrollbar'>
        <div className='main-container'>
          <Outlet/> {/* 子路由頁面由此放入 */}
        </div>
      </div>


      <div className='side-column'>
        <div className='popular-list-area'>
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