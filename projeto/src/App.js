import React from "react";
import "./Componentes/styles.css";

import { Route, Switch } from "react-router-dom";
import Drawer from "./Componentes/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import MeusPedidos from "./Componentes/MeusPedidos";
import EventoContainer from "./Componentes/EventoContainer";
import AdicionaRefeicao from "./Componentes/AdicionaRefeicao";
import ConsultaEventos from "./Componentes/ConsultaEventos";
import PedidoEnvia from "./Componentes/PedidoEnvia";
import RecebePedido from "./Componentes/RecebePedido";
import Login from "./Componentes/Login";
import Calendario from './Componentes/Calendario'
import MudaSenha from './Componentes/MudaSenha'
import Menu from './Componentes/Menu'
import 'react-calendar/dist/Calendar.css';

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