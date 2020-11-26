import { makeStyles, Button, ListItemText, Menu,
 TextField } from '@material-ui/core/'
import Pedidos from './PedidosEx'
import React from 'react'

const useStyles = makeStyles(theme =>({

}))

const RecebePedido = () =>{


    const [anchorEl, setAnchorE1] = React.useState(null)

    
    const handleClose = () => { // Quando clico no item que quero ele volta para estado inicial 'null'
    setAnchorE1(null)
}

    const handleClick = (event) =>{
        setAnchorE1(event.currentTarget) // Quando dou handleclick ativa o menu
    }


    
    const classes = useStyles()


    return(

        <div>

            {Pedidos.map((item, index) => {
            const { cpf, numero, refeicao, pessoa } = item;
            return (
                <div className={classes.item2}>
                <ListItemText></ListItemText>
                <h1>{numero}</h1>
                <div>
                <h5> Refeição: {refeicao.comida.nome} x {refeicao.comida.quantidade}</h5>
                <h5> Bebida: {refeicao.bebida.nome} x {refeicao.bebida.quantidade}</h5>
                </div>

                
                <Button>Pronto!</Button>

                <Button onClick ={handleClick}>

                <Button>
                    Detalhes
                </Button>
                </Button>
                <Menu

                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}        
                onClose={handleClose}
               
                >
                <div>
                 
                 <h4>Nome: {pessoa.nome}</h4>
                 <h4>Quarto: {pessoa.numero}</h4>
          
                 </div>
                </Menu>
                    <Button>Cancela</Button>
                
                    <Button></Button></div>
            );
            })}
        

        </div>

    )


}

export default RecebePedido