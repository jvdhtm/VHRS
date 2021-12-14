import {  Layout } from 'antd'
import { useState } from 'react'
import useWindowSize from '../util/resize'
import { Content, Header } from '../components'

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [screenWidth] = useWindowSize()

  const isMoblie = screenWidth < 768

  const toggleCollapse = () => setCollapsed((prev) => !prev)

  return (
    <Layout className="h-screen">
      <Header isMoblie={isMoblie} toggleCollapse={toggleCollapse} collapsed={collapsed} />
      <Content />
    </Layout>
  )
}

export default Admin;