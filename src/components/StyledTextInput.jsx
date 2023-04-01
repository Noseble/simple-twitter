import {React } from 'react';
import styled, { css } from 'styled-components';

//Usage: <StyledTextInput (className='focus/error/disabled') width="360px" labelName='名稱' placeholder='請輸入名稱' (wordLimit="50") />

const TextInput = ({ textAreaType, width, labelName, type, value, placeholder, wordLimit, wordCount, onChange,passwordWrong, className})=>{
  const alertMessage = '字數超過上線'
  const alertMessage2 = '兩次密碼輸入不一樣'
  return(
    <div className={className}>
      <div className='input-block'>
        <label className='input-label'>{labelName ? labelName : "Label"}</label>
        {textAreaType?
          <textarea disabled={ className.includes('disabled') ? true : false }  value={value || ''} placeholder={placeholder || "Placeholder"} onChange={(event) => onChange?.(event.target.value)} /> :
          <input disabled={ className.includes('disabled') ? true : false } type={type || 'text'}  value={value || ''} placeholder={placeholder || "Placeholder"} onChange={(event) => onChange?.(event.target.value)} />
        }
      </div>
      <div className='input-info'>
        <span className="input-message">{ wordCount > wordLimit ? alertMessage : null }</span>
        <span className="input-message">{ passwordWrong ? alertMessage2 : null }</span>
        { wordLimit ? <span className='limit' onChange={(event) => onChange?.(event.target.value)}>{wordCount} / {wordLimit}</span> : null}
      </div>
    </div>

  )
}

const StyledTextInput = styled(TextInput)`
  ${props=>css`
    width:${props.width};
  `}

  .input-block:has(input:focus){
    &+.input-info{
      visibility:visible;
    }
  }

  .input-block:has(textarea:focus){
    &+.input-info{
      visibility:visible;
    }
  }
  
  .input-block{
    /* display */
    display:flex;
    flex-direction: column;
    
    /* box model */
    padding: 2px 16px 4px;
    border:none;
    background-color:#F5F8FA;
    border-radius: 2px;
    border-bottom: 2px solid #657786;

    &:hover{
      border-bottom: 2px solid #50B5FF;
    }
  }

  .input-label{
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

  textarea{
    height:120px;
    font-size: 16px;
    line-height: 26px;
    background-color:#F5F8FA;
    border:none;
    resize:none;

    &::placeholder{
      color: #B5B5BE;
    }

    &:focus{
      outline: none;
    }
  }

  .input-info{
    /* display */
    visibility: hidden;
    display:flex;
    justify-content: space-between;
    height: 20px;

    /* box model */
    margin-top:4px;

    /* font & others */
    font-size:12px;
    font-weight:500;
    line-height:20px;
    
    span{
      color: #696974;
    }

  }

  /* focus 樣式 */
  &.focus{
    .input-block{
        border-bottom: 2px solid #50B5FF;
    }
  }
  
  /* disabled 樣式 */
  &.disabled{
    .input-block{
      border-bottom: 2px solid #D5D5DC;

      &:hover{
        border-bottom: 2px solid #D5D5DC;
      }
    }
  }
  
  /* alert 樣式 */
  &.alert{

    .input-block{
      border-bottom: 2px solid #FC5A5A;
    }
    .input-message{
      color: #FC5A5A;
    }
    .input-none {
      display: none;
    }

  }

`

export default StyledTextInput