import {Button, Menu, TextField } from "@material-ui/core/"
import React from 'react'


function EditarPedido(){

        
    const [anchorEl, setAnchorE1] = React.useState(null)

    const handleClick = (event) =>{
        setAnchorE1(event.currentTarget) // Quando dou handleclick ativa o menu
    }

    const handleClose = () => { // Quando clico no item que quero ele volta para estado inicial 'null'
    setAnchorE1(null)
}

    return(
        <div>
           
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

            <h5 className='titulo'>Pedido</h5>
            <form noValidate autoComplete="off">
            <TextField id="standard-basic"/>
            </form>

            </Menu>

        </div>
    )

}

export default EditarPedido