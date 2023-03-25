import { useParams, Outlet } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as ReturnIcon } from 'assets/icon/returnArrow.svg';

const HomePageUserArea = ({className}) => {
  const { userId } = useParams()

  return(
    <div className={className}>
      <div className='main-header'>
        <ReturnIcon className="return-icon" />
        <div className="user-title">
          <h3 className="user-title-name">John Doe</h3>
          <h5 className="user-tweets">25 推文</h5>
        </div>
      </div>
      <hr className='main-header-line' />
      <Outlet />
    </div>
  )
}

const StyledHomePageUserArea = styled(HomePageUserArea)`
  .return-icon{
    margin-right: 19px;
    cursor:pointer;

    &:hover{
      fill:#FF6600;
    }
  }

  .user-title{
    display: flex;
    flex-direction: column;

    h3
    ,h5{
      margin:0;
      padding:0;
    }

    h3{
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }

    h5{
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      color: #6C757D;
    }
  }
`


export default StyledHomePageUserArea