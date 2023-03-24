import { Outlet } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

const AdminPage = ({className}) => {
  return(
    <div className={clsx('web-container', className)}>
      <nav className="nav-column">
        nav-column
      </nav>
      <div className="main-list-container">
        <div className="main-header">
          main-header
        </div>
        <hr className="main-header-line"/>
        main-lit-container
      </div>
    </div>
  )
}

export default AdminPage