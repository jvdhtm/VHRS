import {  Layout } from 'antd'
import { useState } from 'react'
import useWindowSize from '../util/resize'
import { Content, Header, Sidebar } from '../components'
import { FC } from "react";

const Admin:FC = ({children}) => {
  const [collapsed, setCollapsed] = useState(false)
  const [screenWidth] = useWindowSize()

  const isMoblie = screenWidth < 768

  const toggleCollapse = () => setCollapsed((prev) => !prev)

  return (
    <>
    <Header isMoblie={isMoblie} toggleCollapse={toggleCollapse} collapsed={collapsed} />
    <Layout className="h-screen">
      <Sidebar />
      <Content ClassName="overflow-auto pt-10 pb-10">
        {children}
      </Content>
    </Layout></>
  )
}

export default Admin;