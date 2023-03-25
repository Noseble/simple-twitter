import styled from "styled-components"

// 載入共用元件
import StyledButton from "components/StyledButton"
import StyledTextInput from "components/StyledTextInput"
import StyledTextLink from "components/StyledTextLink"

// 載入svg
import { ReactComponent as Aclogo } from "assets/icon/AcLogo.svg"


const AdminLoginPage = ({ className }) => {
  return(
    <div className={className}>
      <Aclogo className='login-logo' width='40px' height='40px'/>
      <h1 className="login-title">後台登入</h1>
      <div className="login-input-area">
        <StyledTextInput className='text-input' labelName='帳號' placeholder={'請輸入帳號'} width={'356px'} wordLimit={20}/>
        <StyledTextInput className='text-input' labelName={'密碼'} placeholder={'請輸入密碼'} width={'356px'} wordLimit={16}/>
      </div>
      <StyledButton className='login-button filled' width='100%'>登入</StyledButton>
      <div className="footer">
        <StyledTextLink link='/login'>前台登入</StyledTextLink>
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