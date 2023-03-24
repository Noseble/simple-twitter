import { Outlet } from "react-router-dom"
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
      <Aclogo />
      <h1>建立你的帳號</h1>
      <StyledTextInput labelName={'帳號'} placeholder={'請輸入帳號'} width={'356px'} wordLimit={20}/>
      <StyledTextInput labelName={'名稱'} placeholder={'請輸入使用者名稱'} width={'356px'} wordLimit={20}/>
      <StyledTextInput labelName={'Email'} placeholder={'請輸入Email'} width={'356px'} wordLimit={20}/>
      <StyledTextInput labelName={'密碼'} placeholder={'請設定密碼'} width={'356px'} wordLimit={20}/>
      <StyledTextInput labelName={'密碼確認'} placeholder={'請再次輸入密碼'} width={'356px'} wordLimit={16}/>
      <StyledButton width={'356px'}>註冊</StyledButton>
      <StyledTextLink link={"login"}>取消</StyledTextLink>
      <Outlet/>
    </div>

  )
}

const StyledRegisterPage = styled(RegisterPage)`
  margin: 50px auto;
  display: grid;
  grid-gap: 15px;
  width: 356px;
  justify-items: center;

  h1 {
    font-weight: 700;
    font-size: 28px;
  }
`

export default StyledRegisterPage