import React from "react"
import EscolherRefeicao from "./EscolherRefeicao"
import EscolherBebida from "./EscolherBebida"

import { Button } from "@material-ui/core"

 // Junta AdicionaRefeicao e AdicionaBebida
const PedidoEnvia = () =>{

    return(
       <div>
       
        <EscolherRefeicao></EscolherRefeicao>
       <EscolherBebida></EscolherBebida>


        <Button> Confirma</Button>
       </div>
        
    )
}

export default PedidoEnvia