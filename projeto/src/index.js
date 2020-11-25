import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import Login from './login';
import FazPedido from './FazPedido'
import MeusPedidos from './MeusPedidos'
import AdicionaRefeicao from './Gerencia_Refeicao'
import CancelaPedido from './CancelarPedido'

ReactDOM.render(  
  <React.StrictMode>
    <Router>
      <App/>
    </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
