import eventos from './EventosEx';
import EventoComponent from './EventoComponent'
import React, {Component} from 'react'

class EventoContainer extends Component{
  
    constructor(){
      super()
      this.state={
        eventos: eventos
      }
    }
  
    render(){
        const todosEventos = this.state.eventos.map(a => <EventoComponent chave={a.id} evento={a}/>)
      return (
          <div>{todosEventos}</div>
      )
    }
  }
  
  export default EventoContainer;
  