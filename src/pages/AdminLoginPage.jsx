import styled from "styled-components"
import {  useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

// 載入共用元件
import StyledButton from "components/StyledButton"
import StyledTextInput from "components/StyledTextInput"
import StyledTextLink from "components/StyledTextLink"
import StyledToastContainer from "components/StyledToastContainer";

// 載入svg
import { ReactComponent as Aclogo } from "assets/icon/AcLogo.svg"
import { ReactComponent as Success } from "assets/icon/success.svg"
import { ReactComponent as Failed } from "assets/icon/failed.svg"

// api
import { login } from "api/auth"

const AdminLoginPage = ({ className }) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
  if (account?.length === 0 || password?.length === 0) return;

  const { success, token, user } = await login({
    account,
    password,
  });

  if (success) {
    if (user.role === 'admin') {
      sessionStorage.setItem('token', token);

      // 登入成功訊息
       showToastMessage('登入成功','success')
      setTimeout(() => navigate('/admin'), 1000);
      return;
    } else {
      // 阻止使用者登入並顯示錯誤訊息
      showToastMessage('您的角色不是管理員', 'failed');
    }
  } else {
    // 登入失敗訊息
    showToastMessage('找不到使用者', 'failed');
  }
};

const showToastMessage = (message, icon) => {
  if (icon === 'success') {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      hideProgressBar: true,
      icon: <Success />,
    });
  } else {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      hideProgressBar: true,
      icon: <Failed />,
    });
  }
};


  return(
    <div className={className}>
      <Aclogo className='login-logo' width='40px' height='40px'/>
      <h1 className="login-title">後台登入</h1>
      <div className="login-input-area">
        <StyledTextInput className='text-input' labelName='帳號' placeholder='請輸入帳號' type='text' value={account} width='356px' wordCount={account?.length} onChange={(accountInputValue) => setAccount(accountInputValue)}/>
        <StyledTextInput className='text-input' labelName='密碼' placeholder='請輸入密碼' type='password' value={password} width='356px' wordCount={password?.length} onChange={(passwordInputValue) => setPassword(passwordInputValue)} />
      </div>
      <StyledButton className='login-button filled' width='100%' onClick={handleClick} >登入</StyledButton>
      <div className="footer">
        <StyledTextLink link="/login">前台登入</StyledTextLink>
        <StyledToastContainer />
      </div>
    </div>

  )
}

const StyledAdminLoginPage = styled(AdminLoginPage)`
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
    width: 88ox;
    height: 36px;
    padding: 6px 12px;
  }
`

export default StyledAdminLoginPage