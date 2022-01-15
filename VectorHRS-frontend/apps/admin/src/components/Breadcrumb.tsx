import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Route  } from "../types";

function AppBreadcrumb( paths : Route[]) {
  return (
    <Breadcrumb className="mb-4" separator=">">
      {paths.map((path, index) => (
        <Breadcrumb.Item key={path.id}>
          {index === paths.length - 1 ? (
            <>
              {path.icon && (
                <span className="mr-1">
                  <path.icon />
                </span>
              )}
              <span>{path.name}</span>
            </>
          ) : (
            <Link to={path.path}>
              {path.icon && (
                <span className="mr-1">
                  <path.icon />
                </span>
              )}
              <span>{path.name}</span>
            </Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default AppBreadcrumb;
