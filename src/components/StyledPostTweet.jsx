import styled, { css } from 'styled-components';


/* import shared components */
import StyledUserAvatar from './StyledUserAvatar';
import StyledButton from './StyledButton';

/* import api */
import { addTweet } from 'api/api';
import { useState } from 'react';

//Usage: <StyledPostTweet (modalUsed) userImageSrc='https://picsum.photos/300/300?text=1'/> 

const PostTweet = ({ userImageSrc,  className }) => {
  let alertMessage = ''
  alertMessage='內容不可為空白'
  const [description, setDescription] = useState('')
  const [empty, setEmpty] = useState(false)

  const handleAddTweet = async () => {
    if(description.length === 0) {return setEmpty(true)}

    const {success} = await addTweet({description})

    if (success) {
      window.location.reload()
      }
  }

  return(
    <div className={className}>
      <div className='post-tweet-area'>
        <StyledUserAvatar className='user-avatar' userImageSrc={userImageSrc}/>
        <textarea className="tweet-input-area" type="textarea" placeholder='有什麼新鮮事?' onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <div className='footer-area'>
        <span className='alert-message'>{empty ? alertMessage : ''}</span>
        <StyledButton className="tweet-button filled" onClick={handleAddTweet}>推文</StyledButton>
      </div>
      
    </div>
  )
}

const StyledPostTweet = styled(PostTweet)`
  /* display */
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  
  /* box model */
  width:634px;
  height:136px;
  padding: 16px 24px;
  
  .post-tweet-area{
    display: flex;
    height:100%;
  }


  .tweet-input-area{
    /* box model */
    height:56px;
    width: 526px;
    margin-left: 8px;
    padding-top: 12px;
    border: none;
    border-radius: 2px;
    
    /* font & others */
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    resize:none;

    &:focus{
      outline: none;
      box-shadow: 0 1px 3px 0 #6C757D;
    }
  }

  .footer-area{
    display:flex;
    justify-content: end;
    align-items: center;
    
    .alert-message{
      width: fit-content;
      margin-right: 20px;
      color: #FC5A5A;
      font-size: 15px;
      line-height: 15px;
    }

  }

  ${props=>props.modalUsed && css`
    height: 243px;
    padding: 15px;

    .tweet-input-area{
      height: 163px;
      font-weight: 400;
    }
  `}
`

export default StyledPostTweet