import {React,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";
import Swal from 'sweetalert2';

import StyledButton from "components/StyledButton";
import StyledTextInput from "components/StyledTextInput";

// api 
import { getUserSetting } from "api/api";
import { putUserSetting } from "api/api";


const HomePageSettingArea = ({className}) => {
  const MyId = localStorage.getItem('MyId')
  const navigate = useNavigate();
  const [account , setAccount] = useState('')
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  
  useEffect(() => {
    const getUserSettingAsync = async(MyId) => {
      if(name.length > 50) return
      try {
        const currentSettings = await getUserSetting(MyId);
        setAccount(currentSettings.account);
        setName(currentSettings.name);
        setEmail(currentSettings.email);
      } catch (error) {
        console.error(error);
      }
    };
    getUserSettingAsync(MyId);
  }, [name.length,MyId]);
  
  const handleUpdate = async( )=> {
    // if( account.length === 0 || name.length === 0 || email.length === 0 || password.length === 0 || passwordCheck.length === 0 ) return
    try {
      if (password !== passwordCheck ) return 
      const { message } = await putUserSetting( MyId, account, name, email, password)
      if (message === undefined) {
      // 修改成功訊息
      Swal.fire({
        position: 'top',
        title: '修改成功！',
        timer: 1000,
        icon: 'success',
        showConfirmButton: false,
      });
      navigate(`/user/${MyId}`)
    } else {
      // 修改失敗訊息
      Swal.fire({
        position: 'top',
        title: '修改失敗！',
        text: message, // 顯示錯誤訊息
        timer: 1000,
        icon: 'error',
        showConfirmButton: false,
      });
    }
    } catch (error) {
    console.error(error);
  }
  }

  


  return(
    <div className={clsx('web-container', className)}>
      <div className='main-header'>
        <h2>帳號設定</h2>
      </div>
      <hr className='main-header-line' />
      <div className="setting-area">
        <StyledTextInput className='text-input' labelName='帳號' value={account} placeholder='請輸入帳號' width='593px' wordLimit={50} wordCount={account.length} onChange={(accountInputValue) => setAccount(accountInputValue)} />
        <StyledTextInput className='text-input' labelName='名稱' value={name} placeholder='請輸入使用者名稱' width='593px' wordLimit={50} wordCount={name.length} onChange={(nameInputValue) => setName(nameInputValue)}/>
        <StyledTextInput className='text-input' labelName='Email' value={email} placeholder='請輸入Email' width='593px' wordLimit={50} wordCount={email.length} onChange={(emailInputValue) => setEmail(emailInputValue)} />
        <StyledTextInput className='text-input' labelName='密碼' value={password} type='password' placeholder='請設定密碼' width='593px' wordLimit={16} wordCount={password.length} onChange={(passwordInputValue) => setPassword(passwordInputValue)} />
        <StyledTextInput className='text-input' labelName='密碼確認'  value={passwordCheck} type='password' placeholder='請再次輸入密碼' width='593px' wordLimit={16} wordCount={passwordCheck.length} passwordWrong={password !== passwordCheck} onChange={(passwordCheckInputValue) => setPasswordCheck(passwordCheckInputValue)} />
      </div>
      <div className="button-area">
        <StyledButton className="filled" lg onClick={handleUpdate}>儲存</StyledButton>
      </div>
    </div>
  )
}

const StyledHomePageSettingArea= styled(HomePageSettingArea)`
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

export default StyledHomePageSettingArea
