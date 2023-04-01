import { Outlet, Link,useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

// 共用元件
import StyledNavItem from "components/StyledNavItem";

// svg
import { ReactComponent as AcLogo } from 'assets/icon/AcLogo.svg'
import { useEffect } from "react";



const AdminPage = ({className}) => {
  const navigate = useNavigate();
  const currentUrlPath = useLocation().pathname
  
  console.log(currentUrlPath)

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('MyId')
    navigate('/admin_login')
  }
  
  useEffect(()=>{

    //若沒登入，則導至login頁面
    const auth = localStorage.getItem('token')
    if(auth === null){
      navigate('/admin_login')
    }

  },[navigate])


  return(
    <div className={clsx('admin-web-container', className)}>
      <nav className="admin-nav-column">
        <div className="nav-main">
          <div className="aclogo">
            <AcLogo className="website-logo" />
          </div>
          <div className="nav-list">
            <Link to='/admin/tweets' style={{ textDecoration: 'none' }}><StyledNavItem navTitle={'推文清單'} className={clsx({selected: currentUrlPath==='/admin' || currentUrlPath==='/admin/tweets' })} /></Link>
            <Link to='/admin/users' style={{ textDecoration: 'none' }}><StyledNavItem navTitle={'使用者列表'} className={clsx({selected: currentUrlPath==='/admin/users'})}/></Link>
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

export default StyledAdminPage