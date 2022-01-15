import {  Layout } from 'antd'
import { useState } from 'react'
import useWindowSize from '../util/resize'
import { Content, Header } from '../components'
import { FC } from "react";

const Admin:FC = ({children}) => {
  const [collapsed, setCollapsed] = useState(false)
  const [screenWidth] = useWindowSize()

  const isMoblie = screenWidth < 768

  const toggleCollapse = () => setCollapsed((prev) => !prev)

  return (
    <Layout className="h-screen">
      <Header isMoblie={isMoblie} toggleCollapse={toggleCollapse} collapsed={collapsed} />
      <Content ClassName="p-4 overflow-auto" >
        {children}
      </Content>
    </Layout>
  )
}

export default Admin;