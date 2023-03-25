import styled from "styled-components"

// 載入共用元件
import StyledButton from "components/StyledButton"
import StyledTextInput from "components/StyledTextInput"
import StyledTextLink from "components/StyledTextLink"

// 載入svg
import { ReactComponent as Aclogo } from "assets/icon/AcLogo.svg"

const RegisterPage = ({ className }) => {
  return(
    <div className={className}>
      <Aclogo className='register-logo' width='40px' height='40px'/>
      <h1 className="register-title">建立你的帳號</h1>
      <div className="register-input-area">
        <StyledTextInput className='text-input' labelName='帳號' placeholder='請輸入帳號' width='356px' wordLimit={20}/>
        <StyledTextInput className='text-input' labelName='名稱' placeholder='請輸入使用者名稱' width='356px' wordLimit={20}/>
        <StyledTextInput className='text-input' labelName='Email' placeholder='請輸入Email' width='356px' wordLimit={20}/>
        <StyledTextInput className='text-input' labelName='密碼' placeholder='請設定密碼' width='356px' wordLimit={20}/>
        <StyledTextInput className='text-input' labelName='密碼確認' placeholder='請再次輸入密碼' width='356px' wordLimit={16}/>
      </div>
      <StyledButton className='register-button filled' width='100%'>註冊</StyledButton>
      <div className="footer">
        <StyledTextLink link='/login'>取消</StyledTextLink>
      </div>
    </div>

  )
}

const StyledRegisterPage = styled(RegisterPage)`
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