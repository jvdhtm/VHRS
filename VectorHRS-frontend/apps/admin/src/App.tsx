import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import resources from "@vhrs/resources";

const UserProvider  = resources.contexts.UserProvider;

function App() {
  const appRoutes = routes.filter((route) => route.path);
  return (
    <UserProvider headers={""}>
      <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.component />}
            />
          ))}
      </Routes>
  </UserProvider>
  );
}

export default App;
