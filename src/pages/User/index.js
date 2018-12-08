import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';

import { logout } from "../../services/auth";
import api from '../../services/api';

import NavBarHeader from "../../components/NavBarHeader";

const UserContext: Object = React.createContext();

type Props = {
};

type State = {
    id: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
};

class User extends Component < Props, State > {
    state = {
        id: 0,
        username: '',
        email: '',
        first_name: '',
        last_name: '',
    }

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
            <UserContext.Provider value={this.state}>
                <UserContext.Consumer>

                    {({ id, username, email, first_name, last_name }) => (
                        <div id="block1">
                            <NavBarHeader first_name={first_name} last_name={last_name} />
                            <p><b>Você está logado</b></p>
                            <Link className="btn btn-primary" onClick={logout} to="/">
                                Log out
                            </Link>
                            <p><b>Você precisa mudar sua senha</b></p>
                            <Link className="btn btn-primary" to="/password/change">
                                mudar senha
                            </Link>
                            <p><b>Informações do Usuário</b></p>
                            <p>id: {id}</p>
                            <p>username: {username}</p>
                            <p>email: {email}</p> 
                            <p>first_name: {first_name}</p> 
                            <p>last_name: {last_name}</p>           
                        </div>
                    )}
                    
                </UserContext.Consumer>
            </UserContext.Provider>
        )
    }
}

export default withRouter(User);
