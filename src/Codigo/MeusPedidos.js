import React from 'react'
import { ListItem, List, ListItemText, Button }from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import CancelarPedido from './CancelarPedido'
import EditarPedido from './EditarPedido'

const UseStyles = makeStyles(theme => ({
    menu:{
        width:'100%',
        maxWidth: 350,
        backgroundColor: theme.palette.background.paper,
        display:'inline-flex',
        float:'left',
        margin:'20px',
        
    },

    item:{
        width:'100%',
        float:"left",
    },

    item2:{
        margin:'20px'
    }
}))

const MeusPedidos = props =>{
    const classes = UseStyles()

    return(
        <div>   
      
        <List disablePadding='true'>
            <ListItem > 

                
                <div className={classes.item2}>
                <ListItemText primary='nº Pedido'></ListItemText>
                <EditarPedido></EditarPedido>
                <CancelarPedido></CancelarPedido></div>

                <div className={classes.item2}>
                <ListItemText primary='nº Pedido'></ListItemText>
                <EditarPedido></EditarPedido>
                <CancelarPedido></CancelarPedido></div>

                <div className={classes.item2}>
                <ListItemText primary='nº Pedido'></ListItemText>
                <EditarPedido></EditarPedido>
                <CancelarPedido></CancelarPedido>
                </div>

            </ListItem>

        </List>
        </div>

    )

}

export default MeusPedidos