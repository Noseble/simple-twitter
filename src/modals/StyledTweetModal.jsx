import ReactModal from 'react-modal';
import styled from 'styled-components';

import {ReactComponent as Cross} from 'assets/icon/cross.svg'
import StyledPostTweet from 'components/StyledPostTweet';

const TweetModal = ({show, setShow, className}) => {
  const handleClose = () => setShow(false);

  return (
    <ReactModal 
      isOpen={show} 
      onRequestClose={handleClose} 
      className={className} 
      style={{ 
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
      }} 
      portalClassName="modal-portal"
    >

      <div className='modal-header'>
        <Cross className='exit-button' fill='#FF6600' onClick={handleClose} />
      </div>
      <hr className='main-header-line'/>
      <StyledPostTweet modalUsed/>

    </ReactModal>
  );
}

const StyledTweetModal = styled(TweetModal)`
  width: 634px;
  background-color: #FFFFFF;
  border-radius: 14px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-top: 59px;
  margin-left: calc(50vw - 364px);


  .modal-header{
    width:100%;
    height: 54px;
    display: flex;
    padding: 8px 16px;
    align-items: center;

    .exit-button{
      cursor: pointer;
    }
  }
`

export default StyledTweetModal