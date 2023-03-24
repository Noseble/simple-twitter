import { Outlet } from "react-router-dom"
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
      <Aclogo />
      <h1>後台登入</h1>
      <StyledTextInput labelName={'帳號'} placeholder={'請輸入帳號'} width={'356px'} wordLimit={20}/>
      <StyledTextInput labelName={'密碼'} placeholder={'請輸入密碼'} width={'356px'} wordLimit={16}/>
      <StyledButton width={'356px'}>登入</StyledButton>
      <StyledTextLink>前台登入</StyledTextLink>
      <Outlet/>
    </div>

  )
}

const StyledAdminLoginPage = styled(AdminLoginPage)`
  margin: 50px auto;
  display: grid;
  grid-gap: 15px;
  width: 356px;
  justify-items: center;

  h1 {
    font-weight: 700;
    font-size: 28px;
  }
  a{
    justify-self: end;
  }
`

export default StyledAdminLoginPage