import styled, { css } from 'styled-components';
import { toast } from 'react-toastify';

/* import shared components */
import StyledUserAvatar from './StyledUserAvatar';
import StyledButton from './StyledButton';

// 載入svg
import { ReactComponent as Success } from "assets/icon/success.svg"

/* import api */
import { addTweet } from 'api/api';
import { useState } from 'react';

//Usage: <StyledPostTweet (modalUsed) userImageSrc='https://picsum.photos/300/300?text=1'/> 

const PostTweet = ({ userId, userAvatar,  className }) => {

  const [description, setDescription] = useState('')

  const handleAddTweet = async () => {
    if(description?.length === 0 || description?.length === 140 ) return

    try{
    const {success} = await addTweet({description})

    if (success) {
      showToastMessage()
      setTimeout(() => window.location.reload(), 1000);
      }
    } catch(error){
      console.error(error)
    }
  }

  const showToastMessage = () => {
    toast.success('推文成功', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 10000,
      hideProgressBar: true,
      icon: <Success />,
    });
 };

  return(
    <div className={className}>
      <div className='post-tweet-area'>
        <StyledUserAvatar className='user-avatar' userId={userId} userAvatar={userAvatar}/>

        <textarea 
          className="tweet-input-area" 
          type="textarea" 
          placeholder='有什麼新鮮事?' 
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={(event)=>{
            if (event.key ===  'Enter' && !event.shiftKey) { // Enter key
              event.preventDefault(); // prevent default behavior
              handleAddTweet();
            } else if (event.key ===  'Enter' && event.shiftKey) { // Shift + Enter
              setDescription(description + '\n');
            }
          }}
        />
        
      </div>
      <div className='footer-area'>
        {description.length === 140 ? <span className='alert-message'>內容不能超過 140 字</span>:''}
        <StyledButton className={`tweet-button ${description?.length === 0 ? 'disabled' : 'filled'}`} disabled={description?.length === 0 ? 'disabled' : null} onClick={handleAddTweet}>推文</StyledButton>
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
      box-shadow: 0px 0px 3px 0px #6C757D;
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