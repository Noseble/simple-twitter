import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

import StyledButton from "components/StyledButton";
import StyledNavItem from "components/StyledNavItem";
import {ReactComponent as AcLogo} from 'assets/icon/AcLogo.svg'
import StyledPopularUser from "components/StyledPopularUser";

const HomePage = ({className}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('authToken')
    navigate('login')
  }
  return(
    <div className={clsx('web-container', className)}>
      
      <nav className="nav-column">
        <div className="nav-main">
          <div className="aclogo">
            <AcLogo className="website-logo" />
          </div>
          <div className="nav-list">
            <Link to='/' style={{ textDecoration: 'none' }}><StyledNavItem navTitle='首頁' /></Link>
            <Link to='/user/:userId' style={{ textDecoration: 'none' }}><StyledNavItem navTitle='個人資料' /></Link>
            <Link to='/setting' style={{ textDecoration: 'none' }}><StyledNavItem navTitle='設定' /></Link>
          </div>
          <StyledButton className='filled' width='100%'>推文</StyledButton>
        </div>
        <StyledNavItem className='exit-nav-item' onClick={handleClick} navTitle='登出' />
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
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={true}/>
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={true}/>
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={false}/>
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={false}/>
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={false}/>
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={false}/>
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={false}/>
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={false}/>
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={false}/>
            <StyledPopularUser userName='Pizza Hut' userAccount='@pizzahut' isFollowing={false}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const StyledHomepage= styled(HomePage)`
  .popular-list-area{
    width:100%;
    height: 731px;
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
  }
`

export default StyledHomepage