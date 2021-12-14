import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const { Header } = Layout
const { SubMenu } = Menu

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
    <Header className="sticky top-0 shadow-md bg-white px-0 flex justify-between">
      <div
        role="button"
        className={`w-16 text-center cursor-pointer hover:bg-gray-200 text-blue-500 duration-300  ${hideButtonClass}`}
        onClick={toggleCollapse}
      >
        {collapsed ? (
          <MenuUnfoldOutlined className="text-lg" />
        ) : (
          <MenuFoldOutlined className="text-lg" />
        )}
      </div>
      <div className={`overflow-hidden ${showHideClass}`}>
        <Menu key="user" mode="horizontal"  onClick={handleClickMenu}>
          <SubMenu
            key={0}
            title={
              <>
                <span style={{ color: '#999', marginRight: 4 }}>Hi,</span>
              </>
            }
          >
            <Menu.Item key="SignOut">Sign out</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Header>
  )
}

export default AppHeader