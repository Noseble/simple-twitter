import { Outlet } from "react-router-dom"
import styled from "styled-components"

// 載入共用元件
import StyledButton from "components/StyledButton"
import StyledTextInput from "components/StyledTextInput"
import StyledTextLink from "components/StyledTextLink"

// 載入svg
import { ReactComponent as Aclogo } from "assets/icon/AcLogo.svg"


const LoginPage = ({ className }) => {
  return(
    <div className={className}>
      <Aclogo />
      <h1>登入Alphitter</h1>
      <StyledTextInput labelName={'帳號'} placeholder={'請輸入帳號'} width={'356px'} wordLimit={20}/>
      <StyledTextInput labelName={'密碼'} placeholder={'請輸入密碼'} width={'356px'} wordLimit={16}/>
      <StyledButton width={'356px'}>登入</StyledButton>
      <div className="footer">
      <StyledTextLink link={'register'}>註冊</StyledTextLink>
      <span>．</span>
      <StyledTextLink link={'admin_login'}>後台登入</StyledTextLink>
      </div>
      <Outlet/>
    </div>

  )
}

const StyledLoginPage = styled(LoginPage)`
  margin: 50px auto;
  display: grid;
  grid-gap: 15px;
  width: 356px;
  justify-items: center;

  h1 {
    font-weight: 700;
    font-size: 28px;
  }

  .footer {
    display: flex;
    justify-self: end;
  }
`

export default StyledLoginPage