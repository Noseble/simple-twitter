import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

const HomePage = ({className}) => {
  return(
    <div className={clsx('web-container', className)}>
      <nav className="nav-column">
        nav-column
      </nav>
      <div className="main-container">
        <div className="main-header">
          main-header
        </div>
        <hr className="main-header-line"/>
        main-container
      </div>
      <div className="side-column">
        side-column
      </div>
    </div>
  )
}

const StyledHomepage= styled(HomePage)`
  
`

export default StyledHomepage