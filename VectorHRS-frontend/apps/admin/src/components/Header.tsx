import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import {  Menu } from "antd";
import {
  UserAddOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Link } from 'react-router-dom';

const AppHeader = ({
    isMoblie,
    collapsed,
    toggleCollapse,
  }: {
    isMoblie: boolean
    collapsed: boolean
    toggleCollapse: () => void
  }) => {

  const handleClickMenu = () => {
    console.warn('Empty handleClickMenu')
  }

  const showHideClass =  collapsed ? "show-menu" : "hide-menu"
  const hideButtonClass =  isMoblie ? "" : "hidden"
  return (
    <header className="vhrs-header w-full">
      <div
        role="button"
        className={`header__menu ${hideButtonClass}`}
        onClick={toggleCollapse}
      >
        {collapsed ? (
          <MenuUnfoldOutlined className="text-lg" />
        ) : (
          <MenuFoldOutlined className="text-lg" />
        )}
      </div>
      <div className={`overflow-hidden ${showHideClass}`}>
        <Menu key="user" mode="vertical"  onClick={handleClickMenu}>
            <Menu.Item key="1" icon={<UserAddOutlined />}>
              <Link to="/" >
                Profile 
                </Link> 
              </Menu.Item>
              <Menu.Item key="1" icon={<LogoutOutlined />}>
              <Link to="/logout" >
                Log out 
                </Link> 
              </Menu.Item>
        </Menu>
      </div>
    </header>
  )
}

export default AppHeader