import { ListItem, List, ListItemText, Button }from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import CancelarPedido from './UH-11'
import EditarPedido from './UH-12'
import { withRouter } from "react-router-dom"

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

function MeusPedidos(){
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