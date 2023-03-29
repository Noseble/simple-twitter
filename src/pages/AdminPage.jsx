import { Outlet, Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

// 共用元件
import StyledNavItem from "components/StyledNavItem";

// svg
import { ReactComponent as AcLogo } from 'assets/icon/AcLogo.svg'



const AdminPage = ({className}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/admin_login')
  }


  return(
    <div className={clsx('admin-web-container', className)}>
      <nav className="admin-nav-column">
        <div className="nav-main">
          <div className="aclogo">
            <AcLogo className="website-logo" />
          </div>
          <div className="nav-list">
            <Link to='/admin/tweets' style={{ textDecoration: 'none' }}><StyledNavItem navTitle={'推文清單'} className='selected' /></Link>
            <Link to='/admin/users' style={{ textDecoration: 'none' }}><StyledNavItem navTitle={'使用者列表'} /></Link>
          </div>
        </div>
        <StyledNavItem className='exit-nav-item' onClick={handleLogout} navTitle='登出' />
      </nav>
      <div className="main-list-scrollbar">
        <div className="main-list-container">
          <Outlet />
        </div>
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