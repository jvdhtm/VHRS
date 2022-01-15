import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { Context } from "@vhrs/resources";
const { UserProvider } = Context;

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
