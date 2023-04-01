import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import defaultUserImg from 'assets/image/defaultUserImg.svg';

//Usage:<StyledUserAvatar userAvatar="https://picsum.photos/300/300?text=1" /> 

const UserAvatar = ({ userId, userAvatar, className }) => {
  const location = useLocation()
  
  return(
    <Link to={ userId === undefined ?  location.pathname : `/user/` + userId} style={{ textDecoration: 'none' }}>
      <img className={className} src={userAvatar} alt="" />
    </Link>
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

  &:hover{
    box-shadow: 0 0 3px #171725;
  }

  &.admin{
    cursor: default;
    
    &:hover{
      box-shadow: none;
    }
  }
`

export default StyledUserAvatar