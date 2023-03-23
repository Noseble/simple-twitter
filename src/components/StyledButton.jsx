import styled, { css } from 'styled-components'

//Usage : <StyledButton (outlined) (lg) width="300px" > 註冊 </StyledButton>

const Button =({ className,children }) => {
  return(
    <button className={className}> {children} </button>
  )
}

const StyledButton = styled(Button)`
  
  /* box model */
  height: 40px;
  background-color:#FF6600;
  border: none;
  border-radius:50px;
  
  /* font & others */
  font-size: 1rem;
  line-height: 24px;
  color: white;
  cursor:pointer;
  
  ${/* 手動輸入width值 */
    props=>css`
    width: ${props.width};
  `}

  ${/* 以 outlined prop 調整為外框線樣式 */
    props => props.outlined && css`
    background-color: white;
    border: 1px solid #FF6600;
    color: #FF6600;
  `}

  ${/* 以 lg prop調整為大字體 */
    props => props.lg && css`
    height: 46px;
    font-size: 1.25rem;
    line-height: 30px;
  `}
`

export default StyledButton