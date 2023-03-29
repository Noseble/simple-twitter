import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

import StyledButton from "components/StyledButton";
import StyledNavItem from "components/StyledNavItem";
import StyledTextInput from "components/StyledTextInput";

// api 
import { getUserSetting } from "api/api";
import { putUserSetting } from "api/api";


const HomePage = ({className}) => {
  const MyId = localStorage.getItem('MyId')

  console.log(getUserSetting(284))
  return(
    <div className={clsx('web-container', className)}>
      <div className='main-header'>
        <h2>帳號設定</h2>
      </div>
      <hr className='main-header-line' />
      <div className="setting-area">
        <StyledTextInput  className="text-input" width="593px" labelName='帳號' value='wonderwoman' placeholder='請輸入帳號' />
        <StyledTextInput  className="text-input" width="593px" labelName='名稱' value='Diana' placeholder='請輸入使用者名稱' />
        <StyledTextInput  className="text-input" width="593px" labelName='Email' value='diana@gmail.com' placeholder='請輸入 Email' />
        <StyledTextInput  className="text-input" width="593px" labelName='密碼' placeholder='請設定密碼' />
        <StyledTextInput  className="text-input" width="593px" labelName='密碼再確認' placeholder='請再次輸入密碼' />
      </div>
      <div className="button-area">
        <StyledButton className="filled" lg >儲存</StyledButton>
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