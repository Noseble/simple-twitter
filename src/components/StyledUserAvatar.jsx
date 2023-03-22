import styled from 'styled-components';

import defaultUserImg from 'assets/image/defaultUserImg.svg';

//Usage:<StyledUserAvatar userImageSrc="https://assets-lighthouse.alphacamp.co/medium_PXL_20210405_004126448.MP.jpg" />

const UserAvatar = ({ userImageSrc, className }) => {
  return(
    <img className={className} src={userImageSrc} />
  )
}

const StyledUserAvatar = styled( UserAvatar )`
  /* box model */
  width:50px;
  height:50px;
  border-radius: 50%;
  
  /* others */
  object-fit: cover;
  background-image: url(${defaultUserImg});
  background-size: cover;
  cursor: pointer;
`

export default StyledUserAvatar