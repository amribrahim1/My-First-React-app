import React, { Component } from 'react';

class Edit extends Component {
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

    async componentDidMount() {
        const productId = parseInt(this.props.match.params.id);  
        await fetch(`https://iti-react-cource.herokuapp.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            this.setState({name:product.name,price:product.price})
        })
    } 
    handleSubmit = e => {
        e.preventDefault();
        fetch(`https://iti-react-cource.herokuapp.com/products/${parseInt(this.props.match.params.id)}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name:this.state.name,
                price:this.state.price,
            })
        }).then(res => {
                console.log(res);
                if (res.ok) {
                    console.log('Product updated.');
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
                <h1>Edit Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input value={this.state.name} onChange={this.handleChange} name="name" type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">price</label>
                        <input value={this.state.price} onChange={this.handleChange} name="price" type="price" className="form-control" id="price" placeholder="price" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Edit