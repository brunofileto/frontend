import React, { Component } from "react";

type Props = {
    first_name: string,
}

class NavBarHeader extends Component < Props > {
    render () {
        return (
        <div id="blockNavBar">
            <p>Bem-Vindo {this.props.first_name}</p>
        </div>
        )
    }
}

export default NavBarHeader;
