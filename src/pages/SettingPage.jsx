import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

import StyledButton from "components/StyledButton";
import StyledNavItem from "components/StyledNavItem";
import StyledTextInput from "components/StyledTextInput";

import { ReactComponent as AcLogo } from 'assets/icon/AcLogo.svg'

const HomePage = ({className}) => {
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
        <StyledNavItem className='exit-nav-item' navTitle='登出' />
      </nav>

      <div className='main-scrollbar'>
        <div className='main-container'>
          <div className='main-header'>
            <h2>帳號設定</h2>
          </div>
          <hr className='main-header-line' />
          <div className="setting-area">
            <StyledTextInput  className="text-input" width="593px" labelName='帳號' defaultValue='wonderwoman' placeholder='請輸入帳號' />
            <StyledTextInput  className="text-input" width="593px" labelName='名稱' defaultValue='Diana' placeholder='請輸入使用者名稱' />
            <StyledTextInput  className="text-input" width="593px" labelName='Email' defaultValue='diana@gmail.com' placeholder='請輸入 Email' />
            <StyledTextInput  className="text-input" width="593px" labelName='密碼' placeholder='請設定密碼' />
            <StyledTextInput  className="text-input" width="593px" labelName='密碼再確認' placeholder='請再次輸入密碼' />
          </div>
          <div className="button-area">
            <StyledButton className="filled" lg >儲存</StyledButton>
          </div>
        </div>
      </div>


      <div className='side-column'>
      </div>
    </div>
  )
}

const StyledHomepage= styled(HomePage)`
  .setting-area{
    width: 100%;
    padding: 24px 24px 0;

    .text-input{
      margin-bottom: 5px;
    }
  }
  
  .button-area{
    display:flex;
    justify-content: end;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
  }

`

export default StyledHomepage



// const SettingPage = () => {
//   return(
//     <h1>This is SettingPage.</h1>
//   )
// }

// export default SettingPage