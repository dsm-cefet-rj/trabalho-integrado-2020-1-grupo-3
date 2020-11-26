import React from "react";
import "./styles.css";

import { Route, Switch } from "react-router-dom";
import Drawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";
import MeusPedidos from "./MeusPedidos";
import EventoContainer from "./EventoContainer";
import AdicionaRefeicao from "./AdicionaRefeicao";
import ConsultaEventos from "./ConsultaEventos";
import PedidoEnvia from "./PedidoEnvia";
import RecebePedido from "./RecebePedido";
import Login from "./Login";
import Calendario from './Calendario'
import MudaSenha from './MudaSenha'
import Menu from './Menu'

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>

        <Route exact from="/" render={props => <Login {...props} />} />
        <Route exact from="/menu" render={props => <Menu {...props} />} />

        <Route exact path="/meuspedidos" render={props =><MeusPedidos {...props}/>} />
        <Route exact path="/consultaeventos" render={props => <ConsultaEventos {...props} />} />
        <Route exact path="/pedidoenvia" render={props => <PedidoEnvia {...props} />} />
        <Route exact path= '/eventos' render={props => <EventoContainer {...props}/>} />
        <Route exact path= '/calendario' render={props => <Calendario {...props}/>} />
        <Route exact path= '/mudasenha' render={props => <MudaSenha {...props}/>} />
        

        <Route exact path="/Gadiconarefeicao" render={props => <AdicionaRefeicao {...props} />} />
        <Route exact path="/Grecebepedido" render={props => <RecebePedido {...props} />} />

      </Switch>
    </div>
  );
}