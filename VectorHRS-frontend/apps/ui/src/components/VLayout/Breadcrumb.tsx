import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import type { Route } from "../types";

function AppBreadcrumb( paths : Route[]) {
  return (
    <Breadcrumb className="mb-4" separator=">">
      {paths.map((path, index) => (
        <BreadcrumbItem key={path.id}>
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
            <BreadcrumbLink href={path.path}>
              {path.icon && (
                <span className="mr-1">
                  <path.icon />
                </span>
              )}
              <span>{path.name}</span>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}

export default AppBreadcrumb;
