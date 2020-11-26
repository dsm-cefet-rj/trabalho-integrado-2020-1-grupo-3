import React, {Component} from 'react';
import { cpfMask } from './mask'
  
class Login extends Component {
    constructor(){
        super()
        this.state={
            dados:{
                cpf:'',
                senha:''
            },
            errors:{}

        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLogin(event){ //sempre gera um evento automaticamente em forms
        let input = this.state.dados;
        event.target.type === "text" ?
        input[event.target.name] = cpfMask(event.target.value) :
        input[event.target.name] = event.target.value 
  
        this.setState({
            input
        })
        
    }

    nextPath(path) {
      this.props.history.push(path);
    }

   handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let dados = {};
        dados["cpf"] = "";
        dados["senha"] = "";
        this.setState({dados:dados});
  
        alert('Logado');
    }
  }
  
  validate(){
      let dados = this.state.dados;
      let errors = {};
      let isValid = true;
  
      if (!dados["cpf"] || dados["cpf"].length < 14) {
        isValid = false;
        errors["cpf"] = "Por favor informe o CPF";
      }

      if (!dados["senha"]) {
        isValid = false;
        errors["senha"] = "Por favor informe a senha";
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="cpf">CPF: </label>
            <input 
              type="text" 
              maxLength='14'
              name="cpf" 
              value={this.state.dados.cpf}
              onChange={this.handleLogin}
              class="form-control" 
              placeholder="Informe o CPF" 
              id="cpf" />
  
              <div className="text-danger">{this.state.errors.cpf}</div>
          </div>
  
          <div class="form-group">
            <label for="senha">Senha: </label>
            <input 
              type="password" 
              name="senha" 
              value={this.state.dados.senha}
              onChange={this.handleLogin}
              class="form-control" 
              placeholder="Informe a senha" 
              id="senha" />
  
              <div className="text-danger">{this.state.errors.senha}</div>
          </div>
              
          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}
  
export default Login;
