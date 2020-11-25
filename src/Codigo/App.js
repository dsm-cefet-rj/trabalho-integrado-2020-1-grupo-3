import logo from './logo.svg';
import './App.css';
import MeusPedidos from './UH-13'
import { Route, Switch } from "react-router-dom"
import Drawer from "./Menu"

function App() {
  return (
    <div>
    <Drawer />
    <Switch>
      <Route exact from="/" render={props => <MeusPedidos {...props} />} />
    </Switch>
    </div>
  );
}

export default App;
