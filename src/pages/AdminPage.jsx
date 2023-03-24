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
      <Outlet />
    </div>
  )
}

const StyledAdminPage = styled(AdminPage)`
  .top{
    margin-top: 20px;
  }

`

export default AdminPage