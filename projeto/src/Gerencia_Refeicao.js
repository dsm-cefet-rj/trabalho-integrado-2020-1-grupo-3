import React, {Component} from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import './Gerencia_Refeicao.css';
import TextField from '@material-ui/core/TextField';


// O estado inicia como nulo e quando dou OnClick ele muda para o estado do objeto selecionado que é representado pelo estado Anchor1
function AdicionaRefeicao() {
    const [anchorEl,setAnchorE1] = React.useState(null)

    const handleClose = () => { // Quando clico no item que quero ele volta para estado inicial 'null'
        setAnchorE1(null)
    }
    
    const handleClick = (event) =>{
        setAnchorE1(event.currentTarget) // Quando dou handleclick ativa o menu
    }

       return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <h3>Adiciona</h3>
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <h5 className='titulo'>Nome</h5>
            <form noValidate autoComplete="off">
            <TextField id="standard-basic"/>
            </form>

            <h5 className='titulo'>Tipo</h5>
            <Select>
                <MenuItem></MenuItem>
            </Select>

            <h5>Descrição</h5>
            <form noValidate autoComplete="off">
            <TextField id="standard-basic" />
            </form>
            
            <h5>Preço</h5>
            <form noValidate autoComplete="off">
            <TextField id="standard-basic" />
            </form>

            <Button aria-controls="simple-menu" className='botao' onClick={handleClose}> <h3>Cadastra</h3></Button>
            <Button className='botao' onClick={handleClose}> <h3>Cancela</h3></Button>
        
            </Menu>
        </div>
       );
 }




export default AdicionaRefeicao; 

/** <div>
            
            <Button variant="contained" color="primary">
            Hello World
            </Button>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />

        </form>
        </div> */