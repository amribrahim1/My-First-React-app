import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Product extends Component {
    // state = {
    //     name: this.props.product.name,
    //     count: this.props.product.count,
    // };
    
    render() {
        const classes = this.props.product.count === 0 ? "badge badge-warning m-2" : "badge badge-primary m-2";
        return (            
                <div className="row">
                    <div className="col-1 m-2"><Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link></div>
                    <div className="m-2"><span className={classes}>{this.props.product.count}</span></div>
                    <div className="m-2"><button onClick={() => this.props.onIncrease(this.props.product)} className="btn-sm btn-primary">+</button></div>
                    <div className="m-2"><button onClick={() => this.props.onChange(this.props.product)} className="btn btn-primary fas fa-trash"></button></div>
                </div>           
        )
    }
}

export default Product;