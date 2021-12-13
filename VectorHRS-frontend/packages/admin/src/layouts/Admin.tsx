import { Drawer, Layout } from 'antd'
import { useState } from 'react'
import useWindowSize from '../util/resize'
import { Content, Header, Sidebar } from '../components'

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [screenWidth] = useWindowSize()

  const isMoblie = screenWidth < 768

  const toggleCollapse = () => setCollapsed((prev) => !prev)

  return (
    <Layout className="h-screen">
      <Header toggleCollapse={toggleCollapse} collapsed={collapsed} />
      {isMoblie ? (
        <Drawer
          maskClosable
          closable={false}
          onClose={toggleCollapse}
          visible={!collapsed}
          placement="left"
          bodyStyle={{ padding: 0 }}
        >
          <Sidebar
            isMobile={isMoblie}
            collapsed={false}
            onCollapse={toggleCollapse}
          />
        </Drawer>
      ) : (
        <Sidebar collapsed={collapsed} onCollapse={toggleCollapse} />
      )}
        <Content />

    </Layout>
  )
}

export default Admin;