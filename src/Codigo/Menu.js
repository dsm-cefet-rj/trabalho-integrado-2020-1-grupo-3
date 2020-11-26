import React,{ Component } from 'react'

class Menu extends React.Component{

nextPath(path) {
    this.props.history.push(path);
}


render(){
    return(
        <div>
            <h1 onClick={()=> this.nextPath("/meuspedidos")}>
                Ver Refeição
            </h1>

            <h1 onClick={()=> this.nextPath("/eventos")}>
                Ver Eventos
            </h1>

        </div>
    )
    }
}

export default Menu;