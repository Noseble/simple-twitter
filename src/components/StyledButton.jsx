import clsx from 'clsx'
import styled, { css } from 'styled-components'

//Usage : <StyledButton (className="filled") (disabled) (lg) (width="300px") onclick={onclickFunction} > 註冊 </StyledButton>

const Button =({ className, id, disabled, onClick ,children }) => {
  return(
    <button className={clsx(className,{disabled: disabled})} onClick={onClick} disabled={disabled} data-id={id}> {children} </button>
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

  /* 以.filled 轉為外框樣式 */
  &.filled{
    background-color:#FF6600;
    border: none;
    color: white;
  }

    /* 以.disabled 轉為樣式 */
  &.disabled{
    background-color: #FFFFFF;
    border: 1px solid #D5D5DC;
    color: #D5D5DC;
    cursor: default;

    &:hover{
      background-color: #FFFFFF;
      border: 1px solid #D5D5DC;
      color: #D5D5DC;
      cursor: default;
      box-shadow: none;
    }
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