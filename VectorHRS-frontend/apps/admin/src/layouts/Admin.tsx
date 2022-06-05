
import { useContext, useState } from 'react'
import useWindowSize from '../util/resize'
import { Content, Header, Sidebar } from '../components'
import resources from "@vhrs/resources";
import { FC } from "react";
import { Icontent } from '../types';
import type { IAuth } from "@vhrs/resources/types/authContext";

const Admin:FC<Icontent> = ({children, ClassName}) => {
  const { isAuth } = useContext<IAuth>(resources.authContext.AuthContext);
  if(!isAuth)
  {
    window.location.href = "/login";
  }

  const [collapsed, setCollapsed] = useState(false)
  const [screenWidth] = useWindowSize()

  const isMoblie = screenWidth < 768

  const toggleCollapse = () => setCollapsed((prev) => !prev)

  return (
    <>
    <Header isMoblie={isMoblie} toggleCollapse={toggleCollapse} collapsed={collapsed} />
    <main>
      <Sidebar />
      <Content ClassName="main">
        {children}
      </Content>
    </main></>
  )
}

export default Admin;