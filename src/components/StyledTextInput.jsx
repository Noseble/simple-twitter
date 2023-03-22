import React from 'react';
import styled, { css } from 'styled-components'

//Usage: <StyledTextInput (focus/hover/error/disabled) width="360px" labelName='名稱' (placeholder='John Doe') (wordLimit="50") />

const TextInput = ({ disabled, labelName, placeholder, wordLimit, className})=>{
  let message = "超過字數上線"
  
  return(
    <div className={ className }>
      <div className='input_block'>
        <label className='input_label'>{labelName ? labelName : "Label"}</label>
        <input disabled={disabled ? true : false } type='text' placeholder={placeholder ? placeholder : "Placeholder"}/>
      </div>
      <div className='input_info'>
        {message? <span className="input_message">{message}</span> : null}
        {wordLimit? <span>0 / {wordLimit}</span> : null}
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
  }

  .input_label{
    font-size: 14px;
    line-height: 22px;
    font-family: "Noto Sans TC";
    color: #696974;
  }

  input{
    font-size: 16px;
    line-height: 26px;
    border: none;
    background-color: #F5F8FA;

    &:focus{
      outline: none;
    }
  }

  .input_info{
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

  ${/* focus / hover 樣式 */
    props=>(props.focus || props.hover) && css`
      .input_block{
        border-bottom: 2px solid #50B5FF;
      }
    `
  }

  ${/* error 樣式 */
    props=> props.error && css`
      .input_block{
        border-bottom: 2px solid #FC5A5A;
      }
      .input_message{
        color: #FC5A5A;
      }
    `
  }

  ${/* disabled 樣式 */
    props=>props.disabled && css`
      .input_block{
        border-bottom: 2px solid #D5D5DC;
      }
    `
  }
`

export default StyledTextInput