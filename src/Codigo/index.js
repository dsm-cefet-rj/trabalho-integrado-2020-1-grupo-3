import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import Login from './login';
import FazPedido from './UH-10'
import MeusPedidos from './UH-13'
import AdicionaRefeicao from './Gerencia_Refeicao'
import CancelaPedido from './UH-11'

ReactDOM.render(  
  <React.StrictMode>
    <App></App>
  

    <FazPedido></FazPedido>
  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
