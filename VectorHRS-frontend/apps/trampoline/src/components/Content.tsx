import classNames  from "classnames";
import type { Icontent } from "../types";


const AppContent = ({children, ClassName}:Icontent) => {

  return (
      <div className={classNames(ClassName, 'flex')}>
          {children}
      </div>
  );
};

export default AppContent;
