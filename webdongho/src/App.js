import logo from './logo.svg';
import './App.css';
import HomeAdmin from './component/admin/HomeAdmin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RouterWeb from './Router';

function App() {
  return (
    <div>
      <RouterWeb />
    </div>
  );
}

export default App;
