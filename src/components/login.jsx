import React, { Component } from 'react';
import Joi from 'joi';

class Login extends Component {
    state= {
        username: "",
        password: "",
        errors: {}
    }

    
    handleChange = e => {
        let state = {...this.state}
        state[e.currentTarget.name] = e.currentTarget.value
        this.setState(state)
    }
    // username = React.createRef();
    handleSubmit = e => {
        e.preventDefault()
        // const username = this.username.current.value
        // console.log('submit', username)
        const errors = this.validate();
        if (errors) return;
        
        // call Backend
        console.log('submit');
    }

    validate = () => {
        const errors = {};
        const state = {...this.state}
        delete state.errors;
        const schema = Joi.object({
            username: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
        })
    
        const res = schema.validate(state, {abortEarly:false});
        console.log(res);
        if (!res.error) {
            this.setState({errors:{}})
            return
        }

        for (const error of res.error.details) {
            errors[error.path]=error.message;
        }
        console.log(errors);
        this.setState({errors});
        return errors;
    }
    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input value={this.state.username} onChange={this.handleChange} name="username" type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
                        {this.state.errors.username && <div className="alert alert-danger" role="alert">{this.state.errors.username}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} name="password" type="password" className="form-control" id="password" placeholder="Password" />
                        {this.state.errors.password && <div className="alert alert-danger" role="alert">{this.state.errors.username}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>    
            
        )
    }
}

export default Login