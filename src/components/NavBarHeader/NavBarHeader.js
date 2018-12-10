import React, { Component } from "react";

import './NavBarHeader.css';

type Props = {
    first_name: string,
    last_name: string,
}

class NavBarHeader extends Component < Props > {
    render () {
        return (
            <div>
                <div className="NavBarHeader">
                    <p>Bem-Vindo {this.props.first_name} {this.props.last_name}</p>
                </div>
            </div>
        )
    }
}

export default NavBarHeader;
