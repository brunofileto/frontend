import React, { Component } from "react";

type Props = {

}

type State = {
    first_name: string,
}

class NavBarHeader extends Component < Props, State > {
    state = {
        first_name: '',
    }

    render () {
        return (
        <div id="blockNavBar">
            <p>Bem-Vindo {this.state.first_name}</p>
        </div>
        )
    }
}

export default NavBarHeader;
