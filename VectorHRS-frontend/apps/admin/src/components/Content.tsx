import classNames  from "classnames";
import type { Icontent } from "../types";


const AppContent = ({children, ClassName}:Icontent) => {

  return (
      <main className={classNames(ClassName, 'flex')}>
          {children}
      </main>
  );
};

export default AppContent;
