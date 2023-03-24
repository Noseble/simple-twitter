import styled, { css } from 'styled-components';

/* 導入svg圖檔 */
import { ReactComponent as NavHomeIcon } from 'assets/icon/NavHomeIcon.svg';
import { ReactComponent as NavUserIcon } from 'assets/icon/NavUserIcon.svg';
import { ReactComponent as NavSettingIcon } from 'assets/icon/NavSettingIcon.svg';
import { ReactComponent as NavHomeIconFilled } from 'assets/icon/NavHomeIconFilled.svg';
import { ReactComponent as NavUserIconFilled } from 'assets/icon/NavUserIconFilled.svg';
import { ReactComponent as NavSettingIconFilled } from 'assets/icon/NavSettingIconFilled.svg';
import { ReactComponent as NavExitIcon } from 'assets/icon/NavExitIcon.svg'

//Usage: <StyledNavItem navTitle='設定' (className="selected")/> 

const NavItem = ({ navTitle ,className }) => {
  return(
    <div className={className}>
      <div className='pointer-area'>
        <div className='nav-icon'>
          { navTitle === "首頁" && !className.includes('selected') && <NavHomeIcon fill="#44444F" />}
          { navTitle === "個人資料" && !className.includes('selected') && <NavUserIcon fill="#44444F" />}
          { navTitle === "設定" && !className.includes('selected') && <NavSettingIcon fill="#44444F" />}
          { navTitle === "推文清單" && !className.includes('selected') && <NavHomeIcon fill="#44444F" />}
          { navTitle === "使用者列表" && !className.includes('selected') && <NavUserIcon fill="#44444F" />}
          { navTitle === "登出" && <NavExitIcon fill='#44444F'/>} 
          { navTitle === "首頁" && className.includes('selected') && <NavHomeIconFilled fill="#FF6600" />}
          { navTitle === "個人資料" && className.includes('selected') && <NavUserIconFilled fill="#FF6600" />}
          { navTitle === "設定" && className.includes('selected') && <NavSettingIconFilled fill="#FF6600" />}
          { navTitle === "推文清單" && className.includes('selected') && <NavHomeIconFilled fill="#FF6600" />}
          { navTitle === "使用者列表" && className.includes('selected') && <NavUserIconFilled fill="#FF6600" />}
        </div>
        <h3 className='nav-title'>{navTitle}</h3>
      </div>
      
    </div>
  )
}

const StyledNavItem = styled(NavItem)`
  width: 178;
  height: 58px;
  padding: 16px;
  
  .pointer-area{
    display:flex;
    align-items: center;
  }

  .nav-icon{
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .nav-title{
    margin:0 0 0 16px;
    font-size: 18px;
    font-weight: 700;
    color: #44444F;
    cursor: pointer;
  }
  
  &.selected{
    .nav-icon{
      color: #FF6600;
    }
    .nav-title{
      color: #FF6600;
    }
  }

  &:hover{
    .nav-icon > svg{
      fill: #FF6600;
    }
    .nav-title{
      color: #FF6600;
    }
  }
`

export default StyledNavItem