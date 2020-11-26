import React, { useState } from 'react'
import { ListItem, List, ListItemText, Button, Menu, TextField, MenuItem, Select, FormControl }from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import CancelarPedido from './CancelarPedido'
import Pedidos from './PedidosEx'


const UseStyles = makeStyles(theme => ({
    menu:{
        width:'100%',
        maxWidth: 350,
        backgroundColor: theme.palette.background.paper,
        display:'inline-flex',
        float:'left',
        margin:'30px',
        
    },

    item:{
        width:'100%',
        float:"left",
    },

    item2:{
        margin:'30px'
    }
}))

const MeusPedidos = props =>{
    const classes = UseStyles()

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")


    const handleChange1 = e => setValue1(e.target.value1)
    const handleChange2 = e => setValue2(e.target.value2)


    const [value, setValue] = React.useState(null)

    const [anchorEl, setAnchorE1] = React.useState(null)

    const handleClick = (event) =>{
        setAnchorE1(event.currentTarget) // Quando dou handleclick ativa o menu
    }

    const handleClose = () => { // Quando clico no item que quero ele volta para estado inicial 'null'
    setAnchorE1(null)
}

    return(
        <div>   
      
        <List disablePadding='true'>
            
            {Pedidos.map((item, index) => {
            const { cpf, numero, refeicao, pessoa } = item;
            return (

                <div className={classes.item2}>
                <ListItemText></ListItemText>
                <h5>PEDIDO: {numero}</h5>
                <div>
                <h5>Refeição: {refeicao.comida.nome} x {refeicao.comida.quantidade}</h5>
                <h5> Bebida: {refeicao.bebida.nome} x {refeicao.bebida.quantidade}</h5>

                <h5>Preço Total: {refeicao.bebida.valor + refeicao.comida.valor}</h5>
                </div>
                <Button onClick ={handleClick}>
                Editar
                </Button>
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}        
                onClose={handleClose}
                >
                <FormControl className={classes.formControl1}>
                    <h5>Refeição: </h5>                         
                    <Select onChange={handleChange1}>
                    <MenuItem value={1}>Refeição 1</MenuItem>
                    <MenuItem value={2}>Refeição 2</MenuItem>
                    <MenuItem value={3}>Refeição 3</MenuItem>
                    <MenuItem value={4}>Refeição 4</MenuItem>
                    <MenuItem value={5}>Refeição 5</MenuItem>
                    </Select>

                    <h5>Quantidade:</h5>
                    
                    <Select id = 'menu' onChange = {handleChange2}>
                        <MenuItem value={1} >1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                    </Select>

                    <h5>Bebidas:</h5>
                                                  
                    <Select onChange={handleChange1}>
                        <MenuItem value={1}>Bebida 1</MenuItem>
                        <MenuItem value={2}>Bebida 2</MenuItem>
                        <MenuItem value={3}>Bebida 3</MenuItem>
                        <MenuItem value={4}>Bebida 4</MenuItem>
                        <MenuItem value={5}>Bebida 5</MenuItem>
                    </Select>

                    <h5>Quantidade:</h5>
                    
                    <Select id = 'menu' onChange = {handleChange2}>
                        <MenuItem value={1} >1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                    </Select>
                 </FormControl>
                
                <Button >Pronto!</Button>

                <Button>Cancela</Button>

                

                </Menu>
                
                    <Button>Cancela</Button>
                
                    <Button></Button></div>
            );
            })}
                
            
        </List>
        </div>

    )

}

export default MeusPedidos


/*

            <ListItem > 

                
                <div className={classes.item2}>
                <ListItemText primary='nº pedido'></ListItemText>
                <EditarPedido></EditarPedido>
                <Button></Button></div>

                <div className={classes.item2}>
                <ListItemText primary='nº pedido'>0</ListItemText>
                <EditarPedido></EditarPedido>
                <CancelarPedido></CancelarPedido></div>

                <div className={classes.item2}>
                <ListItemText primary='nº pedido'>0</ListItemText>
                <EditarPedido></EditarPedido>
                <CancelarPedido></CancelarPedido>
                </div>

            </ListItem>

*/