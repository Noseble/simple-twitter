import React from 'react';
import styled, { css } from 'styled-components'

//Usage: <StyledTextInput (className='focus/error/disabled') width="360px" labelName='名稱' placeholder='請輸入名稱' (wordLimit="50") />

const TextInput = ({ labelName, placeholder, type, value, wordLimit, wordCount, onChange, className})=>{
  let alertMessage = "超過字數上線"


  return(
    <div className={ className }>
      <div className='input_block'>
        <label className='input_label'>{labelName ? labelName : "Label"}</label>
        <input disabled={ className.includes('disabled') ? true : false } type={type || 'text'}  value={value || ''} placeholder={placeholder ? placeholder : "Placeholder"} onChange={(event) => onChange?.(event.target.value)} />
      </div>
      <div className='input_info'>
        { wordCount > wordLimit ? <span className="input_message">{alertMessage}</span> : null}
        { wordLimit ? <span className='limit' onChange={(event) => onChange?.(event.target.value)}>{wordCount} / {wordLimit}</span> : null}
      </div>
    </div>

  )
}

const StyledTextInput = styled(TextInput)`
  ${props=>css`
    width:${props.width};
  `}
  
  .input_block{
    /* display */
    display:flex;
    flex-direction: column;
    
    /* box model */
    height:54px;
    padding: 2px 16px 4px;
    border:none;
    background-color:#F5F8FA;
    border-radius: 2px;
    border-bottom: 2px solid #657786;

    &:hover{
      border-bottom: 2px solid #50B5FF;
    }
  }

  .input_label{
    font-size: 14px;
    line-height: 22px;
    color: #696974;
  }

  input{
    font-size: 16px;
    line-height: 26px;
    border: none;
    background-color: #F5F8FA;
    
    &::placeholder{
      color: #B5B5BE;
    }

    &:focus{
      outline: none;
    }
  }

  .input_info {
    /* display */
    display:flex;
    justify-content: space-between;

    /* box model */
    margin-top:4px;

    /* font & others */
    font-size:12px;
    font-weight:500;
    line-height:20px;
    color:#696974;
  }

  /* focus 樣式 */
  &.focus{
    .input_block{
        border-bottom: 2px solid #50B5FF;
    }
  }

  /* error 樣式 */
  &.error{
    .input_block{
      border-bottom: 2px solid #FC5A5A;
    }
    .input_message{
      color: #FC5A5A;
    }
  }
  
  /* disabled 樣式 */
  &.disabled{
    .input_block{
      border-bottom: 2px solid #D5D5DC;

      &:hover{
        border-bottom: 2px solid #D5D5DC;
      }
    }
  }
`

export default StyledTextInput