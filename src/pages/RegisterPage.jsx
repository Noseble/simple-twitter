import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
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
import { register } from "api/auth";

const RegisterPage = ({ className }) => {
  const [account , setAccount] = useState('')
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const navigate = useNavigate();

  const handleClick = async ()=> {
    if( account?.length === 0 || name?.length === 0 || email?.length === 0 || password?.length === 0 || passwordCheck?.length === 0 ) 
    { showToastMessage('所有欄位皆為必填', 'failed'); 
    return
    }

    if (password !== passwordCheck ) {
    showToastMessage('兩次密碼不相同', 'failed');
    return
    }
    
    if (!isValidEmail(email)) {
    showToastMessage('請輸入正確的email格式', 'failed');
    return;
    }
    
   const { success, message } = await register({ account, name,  email , password, passwordCheck });

    if (success) {
        // 註冊成功訊息
        showToastMessage('註冊成功','success')
        setTimeout(() => navigate('/login'), 1000);
      } 
      else {
        // 註冊失敗訊息
        showToastMessage( message, 'failed');
      }
    }

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
  
    const isValidEmail = (email) => {
    // 正則表達式驗證是否符合 email 格式
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }


  return(
    <div className={className}>
      <Aclogo className='register-logo' width='40px' height='40px'/>
      <h1 className="register-title">建立你的帳號</h1>
      <div className="register-input-area">
        <StyledTextInput className='text-input' labelName='帳號' value={account} placeholder='請輸入帳號' width='356px' wordLimit={50} wordCount={account?.length} onChange={(accountInputValue) => setAccount(accountInputValue)} />
        <StyledTextInput className='text-input' labelName='名稱' value={name} placeholder='請輸入使用者名稱' width='356px' wordLimit={20} wordCount={name?.length} onChange={(nameInputValue) => setName(nameInputValue)}/>
        <StyledTextInput className='text-input' labelName='Email' value={email} type='email' placeholder='請輸入Email' width='356px' wordLimit={50} wordCount={email?.length} onChange={(emailInputValue) => setEmail(emailInputValue)} />
        <StyledTextInput className='text-input' labelName='密碼' value={password} type='password' placeholder='請設定密碼' width='356px' wordLimit={16} wordCount={password?.length} onChange={(passwordInputValue) => setPassword(passwordInputValue)} />
        <StyledTextInput className='text-input' labelName='密碼確認'  value={passwordCheck} type='password' placeholder='請再次輸入密碼' width='356px' wordLimit={16} wordCount={passwordCheck?.length} passwordWrong={password !== passwordCheck} onChange={(passwordCheckInputValue) => setPasswordCheck(passwordCheckInputValue)} />
      </div>
      <StyledButton className='register-button filled' width='100%' onClick={handleClick} >註冊</StyledButton>
      <div className="footer">
        <StyledTextLink link="/login">取消</StyledTextLink>
        <StyledToastContainer />
      </div>
    </div>

  )
}

const StyledRegisterPage = styled(RegisterPage)`
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

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 356px;
  margin: 69px auto 0;
  
  .register-logo{
    margin-bottom: 29px;
  }

  .register-title{
    margin: 0 auto 24px;
    font-weight: 700;
    font-size: 28px;
    color: #1C1C1C;
  }

  .register-input-area{
    margin: 16px auto;
    
    .text-input{
      margin-bottom: 8px;
    }

    .text-input:last-child{
      margin-bottom: 0;
    }
  }

  .register-button{
    margin-bottom: 16px;
  }
  .footer {
    /* display */
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    /* box model */
    width: 88ox;
    height: 36px;
    padding: 6px 12px;
  }
`

export default StyledRegisterPage





// const RegisterPage = ({ className }) => {
//   return(
//     <div className={className}>
//       <Aclogo />
//       <h1>建立你的帳號</h1>
//       <StyledTextInput labelName={'帳號'} placeholder={'請輸入帳號'} width={'356px'} wordLimit={20}/>
//       <StyledTextInput labelName={'名稱'} placeholder={'請輸入使用者名稱'} width={'356px'} wordLimit={20}/>
//       <StyledTextInput labelName={'Email'} placeholder={'請輸入Email'} width={'356px'} wordLimit={20}/>
//       <StyledTextInput labelName={'密碼'} placeholder={'請設定密碼'} width={'356px'} wordLimit={20}/>
//       <StyledTextInput labelName={'密碼確認'} placeholder={'請再次輸入密碼'} width={'356px'} wordLimit={16}/>
//       <StyledButton width={'356px'}>註冊</StyledButton>
//       <StyledTextLink link={"register"}>取消</StyledTextLink>
//       <Outlet/>
//     </div>

//   )
// }

// const StyledRegisterPage = styled(RegisterPage)`
//   margin: 50px auto;
//   display: grid;
//   grid-gap: 15px;
//   width: 356px;
//   justify-items: center;

//   h1 {
//     font-weight: 700;
//     font-size: 28px;
//   }
// `

// export default StyledRegisterPage