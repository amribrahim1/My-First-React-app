import React, { Component, Fragment } from 'react';
import {Redirect } from "react-router-dom";
const queryString = require('query-string');

class ProductDetails extends Component {
    handleSave = () => {
        // Save to backend
        this.props.history.push('/cart')
    }
    
    render() {
        console.log(this.props);
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed);
        const product = this.props.products.filter(p => p.id ===parseInt(this.props.match.params.id))[0]
        console.log(product);
        if (!product) {return <Redirect to="/not-found"/> }
        return(
            <Fragment>    
                <h1>Product No. {product.id}</h1>
                <h2>{product.name}</h2>
                <h2>Count in shoping cart: {product.count}</h2>
                <button onClick={this.handleSave} className="btn btn-primary">Save</button>
            </Fragment>
        )
    } 
}

export default ProductDetails