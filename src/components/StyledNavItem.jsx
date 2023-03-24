import styled, { css } from 'styled-components';

/* 導入svg圖檔 */
import { ReactComponent as NavHomeIcon } from 'assets/icon/NavHomeIcon.svg';
import { ReactComponent as NavUserIcon } from 'assets/icon/NavUserIcon.svg';
import { ReactComponent as NavSettingIcon } from 'assets/icon/NavSettingIcon.svg';
import { ReactComponent as NavHomeIconFilled } from 'assets/icon/NavHomeIconFilled.svg';
import { ReactComponent as NavUserIconFilled } from 'assets/icon/NavUserIconFilled.svg';
import { ReactComponent as NavSettingIconFilled } from 'assets/icon/NavSettingIconFilled.svg';

//Usage: <StyledNavItem navTitle='設定' (className="selected")/> 

const NavItem = ({ navTitle ,className }) => {
  return(
    <div className={className}>
      <div className='nav-icon'>
        { navTitle === "首頁" && !className.includes('selected') && <NavHomeIcon fill="#44444F" />}
        { navTitle === "個人資料" && !className.includes('selected') && <NavUserIcon fill="#44444F" />}
        { navTitle === "設定" && !className.includes('selected') && <NavSettingIcon fill="#44444F" />}
        { navTitle === "推文清單" && !className.includes('selected') && <NavHomeIcon fill="#44444F" />}
        { navTitle === "使用者列表" && !className.includes('selected') && <NavUserIcon fill="#44444F" />}
        { navTitle === "首頁" && className.includes('selected') && <NavHomeIconFilled fill="#FF6600" />}
        { navTitle === "個人資料" && className.includes('selected') && <NavUserIconFilled fill="#FF6600" />}
        { navTitle === "設定" && className.includes('selected') && <NavSettingIconFilled fill="#FF6600" />}
        { navTitle === "推文清單" && className.includes('selected') && <NavHomeIconFilled fill="#FF6600" />}
        { navTitle === "使用者列表" && className.includes('selected') && <NavUserIconFilled fill="#FF6600" />}
      </div>
      <h3 className='nav-title'>{navTitle}</h3>
    </div>
  )
}

const StyledNavItem = styled(NavItem)`
  display:flex;
  align-items: center;
  width: 178px;
  height: 58px;
  
  .nav-icon{
    margin-left: 20px;
    width: 24px;
    height: 24px;
  }

  .nav-title{
    margin:0 0 0 16px;
    font-size: 18px;
    font-weight: 700;
    color: #44444F;
  }
  
  &.selected{
    .nav-icon{
      color: #FF6600;
    }
    .nav-title{
      color: #FF6600;
    }
  }
`

export default StyledNavItem