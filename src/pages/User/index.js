import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';

import { logout } from "../../services/auth";
import api from '../../services/api';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            email: "",
            first_name: "",
            last_name: ""
        };
        //this.handleChange = this.handleChange.bind(this);
    };

    // buscar info dos usuarios
    componentDidMount() {
        api.get("/rest-auth/user/")
            .then(response => {
                this.setState({
                    id: response.data.pk,
                    username: response.data.username,
                    email: response.data.email,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name
                });
            })
            .catch((error) => {
                console.log(error);
            })
    };
    
    render () {
        return (
            <div id="block1">
                <p><b>Você está logado</b></p>
                <Link className="btn btn-primary" onClick={logout} to="/">
                    Log out
                </Link>
                <p><b>Você precisa mudar sua senha</b></p>
                <Link className="btn btn-primary" to="/password/change">
                    mudar senha
                </Link>
                <p><b>Informações do Usuário</b></p>
                <p>id: {this.state.id}</p>
                <p>username: {this.state.username}</p>
                <p>email: {this.state.email}</p> 
                <p>first_name: {this.state.first_name}</p> 
                <p>last_name: {this.state.last_name}</p>           
            </div>
        )
    }
}

export default withRouter(User);
