import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { getEnrollment } from '../../services/storage';

type Props = {
};

type State = {
};

class Evaluation extends Component < Props, State > {
    render () {
        return (
            <p>
            {getEnrollment()}
            </p>
        )
    }
}

export default withRouter(Evaluation);