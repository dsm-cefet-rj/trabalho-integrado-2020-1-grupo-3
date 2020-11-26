import eventos from './EventosEx';
import EventoComponent from './EventoComponent'
import React, {Component} from 'react'
import Calendar from 'react-calendar';

class EventoContainer extends Component{
    constructor(){
      super()
      this.state={
        eventos: eventos,
        date: new Date()
      }
    }

    onChange = date => this.setState({ date })
  
    render(){
         const diaSemana = this.state.date.getUTCDay()
         const todosEventos = this.state.eventos.map(a =>{
          if (diaSemana === 1 && a.id === "1"){
            return null
          }else if (diaSemana === 2 && a.id === "2"){
            return null
          } else if (diaSemana === 3 && a.id === "3"){
            return null
          } else {
            return <EventoComponent chave={a.id} evento={a}/>
          }
        } )
       
      return (
          <div>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
            {todosEventos}
          </div>
      )
    }
  }
  
  export default EventoContainer;
  