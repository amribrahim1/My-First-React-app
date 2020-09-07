import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

class About extends Component {
    state= {}
    
    render() {
        return (
            <Fragment>
                <h1>About</h1>
                <div className="row">
                    <div className="col-3">
                        <div className="list-group" role="tablist">
                        <Link className="list-group-item list-group-item-action" to="/about/company" role="tab">Company</Link>
                        <Link className="list-group-item list-group-item-action" to="/about/team" role="tab">Team</Link>
                        </div>
                    </div>
                    <div className="col">
                        <Route path="/about/company" component={Company}/>
                        <Route path="/about/team" component={Team}/>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default About

function Company() {
    return <h1>about Company</h1>
}

function Team() {
    return <h1>about our Team</h1>
}