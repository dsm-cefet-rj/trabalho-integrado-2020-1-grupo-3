import AdicionaBebida from "./AdicionaBebida"
import Button from "@material-ui/core/Button"

function FazPedido(){

    return(
        <div>
        <AdicionaBebida></AdicionaBebida>
        
        <Button>Solicitar</Button>

        <Button>Limpar</Button>

        </div>
    )
}

export default FazPedido;