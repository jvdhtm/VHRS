import {   BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ThemeProvider } from './components'
import routes from "./routes";
import  resources from "@vhrs/resources";
import  "./styles/site.scss";
const { AuthProvider } = resources.authContext;

function App() {
  const appRoutes = routes.filter((route) => route.path);
  return (
    <AuthProvider headers={""}>
     <ThemeProvider>
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
      </ThemeProvider>
  </AuthProvider>
  );
}

export default App;
