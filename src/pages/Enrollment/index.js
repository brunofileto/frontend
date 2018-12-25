import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from '../../services/api';

type Props = {
    // handleClick: Function,
};

type State = {
    enrollments: Array<{
        id: number,
        enrollment: string,
    }>,
};

class Enrollment extends Component < Props, State > {
    handleClick = this.handleClick.bind(this);

    state = {
        enrollments: [],
    };

    handleClick (e, item) {
        console.log(item)
    };

    componentDidMount() {
        api.get("/enrollment/")
            .then(response => {
                this.setState({
                    enrollments: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    };


    render () {
        return (
            <div>
                {this.state.enrollments.map(item => (
                    <div key={item.id}>
                        <button onClick={(e) => this.handleClick(e, item)}>
                            {item.enrollment}
                        </button>
                     </div>
                ))}
            </div>
        )
    }
}

export default withRouter(Enrollment);