import { makeStyles, FormControl, Button, Menu, TextField } from "@material-ui/core"
import React from 'react'



function CancelarPedido(){

    
        const [anchorEl,setAnchorE1] = React.useState(null)
    
        const handleClick = (event) =>{
            setAnchorE1(event.currentTarget) // Quando dou handleclick ativa o menu
        }

       

    return(
        <div>
            <Button onClick={handleClick}> Cancela </Button>
                    </div>
    )
}

export default CancelarPedido