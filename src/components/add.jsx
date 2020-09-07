import React, { Component } from 'react';

class Add extends Component {
    state= {
        name: "",
        price: "",
        id: ""
    }

    handleChange = e => {
        let state = {...this.state}
        state[e.currentTarget.name] = e.currentTarget.value
        this.setState(state)
    }
    
    handleSubmit = e => {
        e.preventDefault();
        fetch('https://iti-react-cource.herokuapp.com/products/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name:this.state.name,
                price:this.state.price,
                count: 0,
                isInCart: false
            })
        }).then(res => {
            console.log(res);
            if (res.ok) {
                console.log('Product added.');
            } else {
                alert(res.statusText);
            }
        })
        // call Backend
        console.log('submit');
        this.props.history.replace("/admin");
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add Product</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input value={this.state.name} onChange={this.handleChange} name="name" type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">price</label>
                        <input value={this.state.price} onChange={this.handleChange} name="price" type="price" className="form-control" id="price" placeholder="price" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </React.Fragment>           
        )
    }
}

export default Add