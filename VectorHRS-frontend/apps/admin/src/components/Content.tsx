import { Layout } from "antd";
import classNames  from "classnames";



const { Content } = Layout;

interface Icontent{
  children: React.ReactNode
  ClassName: string
}


const AppContent = ({children, ClassName}:Icontent) => {

  return (
      <Content className={classNames(ClassName, 'flex')}>
          {children}
      </Content>
  );
};

export default AppContent;
