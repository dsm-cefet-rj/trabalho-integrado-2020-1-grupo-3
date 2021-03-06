import React, {Component} from 'react'
import { cpfMask } from './mask'
import {withRouter} from 'react-router-dom'

class Login extends Component{
    constructor(){
        super()
        this.state={
            cpf: "",
            senha: ""
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(event){ //sempre gera um evento automaticamente em forms
        const {name, value, type} = event.target
        type === "text" ?
        this.setState({ [name] : cpfMask(value) } ) :
        this.setState({ [name] : value})

      }

      nextPath(path) {
         this.props.history.push(path);
      }

    render(){
        return(
            <form>
                <label> CPF </label>
                <input type = "text"
                    maxLength='14'
                    placeholder = "Insira seu CPF" 
                    value= {this.state.cpf}
                    name = "cpf"
                    onChange = {this.handleLogin}/>
                <br />
                <label> Senha </label>
                <input type = "password"
                    placeholder = "Insira sua senha" 
                    value= {this.state.senha}
                    name = "senha"
                    onChange = {this.handleLogin}/>
                <br />
                <button onClick= {()=> this.nextPath("/menu")}>Login</button>

            </form>
        )
    }
}

export default Login