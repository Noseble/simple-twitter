import styled from 'styled-components';

import defaultUserImg from 'assets/image/defaultUserImg.svg';

//Usage:<StyledUserAvatar userImageSrc="https://picsum.photos/300/300?text=1" /> 

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