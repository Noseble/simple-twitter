import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

import StyledButton from "components/StyledButton";
import StyledNavItem from "components/StyledNavItem";
import {ReactComponent as AcLogo} from 'assets/icon/AcLogo.svg'

const HomePage = ({className}) => {
  return(
    <div className={clsx('web-container', className)}>
      <nav className="nav-column">
        <div className="nav-main">
          <div className="aclogo">
            <AcLogo className="website-logo" />
          </div>
          <div className="nav-list">
            <StyledNavItem navTitle='首頁' />
            <StyledNavItem navTitle='個人資料' />
            <StyledNavItem navTitle='設定' />
          </div>
          <StyledButton className="filled" width='100%'>推文</StyledButton>
        </div>

        <StyledNavItem className='exit-nav-item' navTitle='登出' />
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