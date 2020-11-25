import logo from './logo.svg';
import './App.css';
import MeusPedidos from './MeusPedidos'
import { Route, Switch } from "react-router-dom"
import Drawer from "./Drawer"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
    <Drawer />
    <Switch>
      <Route exact from="/" render={props => <MeusPedidos {...props} />} />
    </Switch>
    </div>
  );
}

export default App;
