import React, {Component} from 'react'
import Collapsible from 'react-collapsible';

class EventoComponent extends Component{

    render(){
        let infoData = [
            this.props.evento.nome,
            this.props.evento.data,
            this.props.evento.horario
        ]
        infoData = JSON.stringify(infoData).replaceAll('","', ' ').replace('["', '').replace('"]', '')
        return(
                <div>
                    <Collapsible trigger= {infoData}>
                        <h3>Local: {this.props.evento.local}</h3>
                        <h3>Descrição: {this.props.evento.descricao}</h3>
                    </Collapsible>
                </div>
            )
    }
        
}

export default EventoComponent