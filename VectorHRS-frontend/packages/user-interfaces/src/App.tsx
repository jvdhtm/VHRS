import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  './annotates/';
import Login from './components/Login';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;