import React, {Component} from 'react'

class eventoComponent extends Component{
    
    render(){
        return(
                <div>
                    <h1>{this.props.evento.nome}</h1>
                    <h2>{this.props.evento.data}</h2>
                    <h3>{this.props.evento.horario}</h3>
                    <h3>{this.props.evento.local}</h3>
                    <h3>{this.props.evento.descricao}</h3>
                </div>
            )
    }
        
}

export default eventoComponent