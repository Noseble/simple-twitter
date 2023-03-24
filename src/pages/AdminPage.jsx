import { Outlet } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

// 共用元件
import StyledNavItem from "components/StyledNavItem";
import StyledAdminTweet from "components/StyledAdminTweet";
// svg
import { ReactComponent as Logo } from 'assets/icon/AcLogo.svg'
const AdminPage = ({className}) => {
  return(
    <div className={clsx('web-container', className)}>
      <nav className="nav-column">
        <div className="top">
        <div className="website-logo"><Logo /></div>
        <StyledNavItem navTitle={'推文清單'} className="selected" />
        <StyledNavItem navTitle={'使用者列表'} />
        </div>
        <StyledNavItem navTitle={'登出'} />
      </nav>
      <div className="main-list-container">
        <div className="main-header">
          <h2>推文清單</h2>
        </div>
        <hr className="main-header-line"/>
        <StyledAdminTweet 
          userName={'Adam'}
          userAccount={'@adam666'} 
          tweetTime={'三小時'} 
          tweetContent={'ASasd45wa64sr89qw4d65a4sd654'}
        />      
      </div>
    </div>
  )
}

const StyledAdminPage = styled(AdminPage)`
  .top{
    margin-top: 20px;
  }

`

export default AdminPage