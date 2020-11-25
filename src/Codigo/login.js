import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';


function Login(){


   
    return(
        <div>
        <h5> Usuário: </h5>
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" />
         </form>
        
         <h5> Senha: </h5>
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" />
         </form>
         
         <Button aria-controls="simple-menu" aria-haspopup="true">
            <h4>Login</h4>
         </Button>

         </div>
    )

 }

  export default Login;