import styled from "styled-components"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

// 載入共用元件
import StyledButton from "components/StyledButton"
import StyledTextInput from "components/StyledTextInput"
import StyledTextLink from "components/StyledTextLink"

// 載入svg
import { ReactComponent as AcLogo } from "assets/icon/AcLogo.svg"

// api
import { login } from "api/auth"


const LoginPage = ({ className }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleClick = async () => {
    if (email.length === 0 || password.length === 0) return;
   
    const { success, token, user  } = await login({
      email,
      password,
    });

if (success) {
    if (user.role === 'user') {
      localStorage.setItem('token', token);

      // 登入成功訊息
      Swal.fire({
        position: 'top',
        title: '登入成功！',
        timer: 1000,
        icon: 'success',
        showConfirmButton: false,
      });
      navigate('/');
      return;
    } else {
      // 阻止使用者登入並顯示錯誤訊息
      Swal.fire({
        position: 'top',
        title: '權限不足！',
        text: '您的角色是管理員，無法登入。',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } else {
    // 登入失敗訊息
    Swal.fire({
      position: 'top',
      title: '登入失敗！',
      timer: 1000,
      icon: 'error',
      showConfirmButton: false,
    });
  }
  };


  return(
    <div className={className}>
      <AcLogo className='login-logo' width='40px' height='40px'/>
      <h1 className="login-title">登入 Alphitter</h1>
      <div className="login-input-area">
        <StyledTextInput className='text-input' labelName='帳號' value={email}   placeholder='請輸入帳號' width='356px' onChange={(emailInputValue) => setEmail(emailInputValue)}/>
        <StyledTextInput className='text-input' labelName='密碼' value={password}  placeholder='請輸入密碼' type='password' width='356px' onChange={(passwordInputValue) => setPassword(passwordInputValue)}/>
      </div>
      <StyledButton className='login-button filled' width='100%' onClick={handleClick}>登入</StyledButton>
      <div className="footer">
        <StyledTextLink link='/register'>註冊</StyledTextLink>
        <span>．</span>
        <StyledTextLink link='/admin_login'>後台登入</StyledTextLink>
      </div>
    </div>

  )
}

const StyledLoginPage = styled(LoginPage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 356px;
  margin: 69px auto 0;
  
  .login-logo{
    margin-bottom: 29px;
  }

  .login-title{
    margin: 0 auto 24px;
    font-weight: 700;
    font-size: 28px;
    color: #1C1C1C;
  }

  .login-input-area{
    margin: 16px auto;
    
    .text-input{
      margin-bottom: 8px;
    }

    .text-input:last-child{
      margin-bottom: 0;
    }
  }

  .login-button{
    margin-bottom: 16px;
  }
  .footer {
    /* display */
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    /* box model */
    width: 160px;
    height: 36px;
    padding: 6px 12px;
  }
`

export default StyledLoginPage