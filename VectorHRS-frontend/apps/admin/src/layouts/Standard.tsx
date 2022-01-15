import { Layout } from 'antd'
import { Content } from '../components'
import { FC } from "react";

const Standard:FC = ({children}) => {
  return (
    <Layout className="h-screen">
      <Content ClassName="p-4" >
        {children}
      </Content>
    </Layout>
  )
}

export default Standard;