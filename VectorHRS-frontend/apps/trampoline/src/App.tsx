import {   BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import  resources from "@vhrs/resources";
import  "./styles/site.scss";
import 'remixicon/fonts/remixicon.css'

const { AuthProvider } = resources.authContext;


function App() {
  const appRoutes = routes.filter((route) => route.path);
  return (
    <AuthProvider headers={""}>
            <Router>
              <Routes>
                  {appRoutes.map((route) => (
                    <Route
                      key={route.id}
                      path={route.path}
                      element={<route.component />}
                    />
                  ))}
              </Routes>
            </Router>
  </AuthProvider>
  );
}

export default App;
