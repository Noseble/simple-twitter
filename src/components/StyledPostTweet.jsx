import styled, { css } from 'styled-components';

/* import shared components */
import StyledUserAvatar from './StyledUserAvatar';
import StyledButton from './StyledButton';

//Usage: <StyledPostTweet (modalUsed) userImageSrc='https://assets-lighthouse.alphacamp.co//medium_PXL_20210405_004126448.MP.jpg' />

const PostTweet = ({ userImageSrc,className }) => {
  return(
    <div className={className}>
      <div className='post_tweet_area'>
        <StyledUserAvatar className='user_avatar' userImageSrc={userImageSrc}/>
        <textarea className="tweet_input_area" type="textarea" placeholder='有什麼新鮮事?'/>
      </div>
      <div className='button_area'>
        <StyledButton className="tweet_button" width="64px">推文</StyledButton>
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
  
  .post_tweet_area{
    display: flex;
    height:100%;
  }


  .tweet_input_area{
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

  .button_area{
    display:flex;
    justify-content: end;
  }

  ${props=>props.modalUsed && css`
    height: 243px;

    .tweet_input_area{
      height: 163px;
      font-weight: 400;
    }
  `}
`

export default StyledPostTweet