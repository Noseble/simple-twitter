import styled, { css } from 'styled-components'

//Usage : <StyledButton (className="filled") (lg) (width="300px") onclick={onclickFunction} > 註冊 </StyledButton>

const Button =({ className, onclick, children }) => {
  return(
    <button className={className} onClick={onclick}> {children} </button>
  )
}

const StyledButton = styled(Button)`
  
  /* box model */
  height: 40px;
  background-color: white;
  border: 1px solid #FF6600;
  border-radius:50px;
  padding: 8px 16px;
  
    /* font & others */
  font-size: 1rem;
  line-height: 24px;
  color: #FF6600;
  cursor: pointer;

  /* 若需要特定width值可手動輸入 */
  ${props=>css`
    width: ${props.width};
  `}

  /* 以 lg prop調整為大字體 */
  ${props => props.lg && css`
    height: 46px;
    font-size: 1.25rem;
    line-height: 30px;
  `}
  
  /* 以.outlined 轉為外框樣式 */
  &.filled{
    background-color:#FF6600;
    border: none;
    color: white;
  }

  /* 設定hover時樣式 */
  &:hover{
    background-color:#FF6600;
    border: none;
    color: white;
    box-shadow: 0 0 2.5px #6C757D;
  }
`

export default StyledButton