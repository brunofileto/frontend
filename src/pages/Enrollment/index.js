import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from '../../services/api';
// import { setEnrollment } from '../../services/storage';

import type { RouterHistory } from "react-router-dom";

type Props = {
    // handleClick: Function,
    history: RouterHistory,
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
        const { history } = this.props;
        // setEnrollment(item.enrollment);
        // console.log(item.enrollment)
        if (item.evaluation_flag) {
            history.push("/userhome")
        }
        else {
            history.push("/evaluation")
        }
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