import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { login } from "../../services/auth";
import api from '../../services/api';
import { getToken } from "../../services/auth";

type State = {
    username: number,
    password: string,
}

class Home extends Component < State > {
    state = {
        username: '',
        password: '',
  };

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    };

    handleChange(e) {
        const { name, value } = e.currentTarget
        this.setState({
            [name]: value});
    }

    handleSignIn(e) { 
        e.preventDefault();
        const { username, password } = this.state;
        const { history } = this.props;

        if (!username || !password) {
            alert("Preencha e-mail e senha para continuar!" );
        }
        else {api.post("/rest-auth/login/", { username, password })
                .then(function (response) {
                    login(response.data.key);
                    history.push("/user");
                    })
                    
                .catch(function () {
                    alert("Houve um problema com o login, verifique suas credenciais.");
                    })
        }
    }
      
    render() {
        return (
            <div id="block1">
                <form onSubmit={this.handleSignIn}>
                    <label>
                        username:
                        <input type="number" value={this.state.username} onChange={this.handleChange} name="username" />
                    </label>
                    <label>
                        Senha:
                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <Link className="btn btn-primary" to="/password/reset">
                    Esqueceu sua senha?
                </Link> 
            </div>
            
 
            
        );
    }
}
  
export default withRouter(Home);