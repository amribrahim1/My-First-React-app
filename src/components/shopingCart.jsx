import React, { Component } from 'react';
import Product from './product';

class ShopingCart extends Component {
    

    render() {
        return (
            <main className="container">
                <h1>Shoping Cart</h1>
                <button onClick={this.props.onReset} className="btn btn-secondary">Reset</button>
                {this.props.products.map(product => (
                    <Product key={product.id} product={product} onChange={this.props.onChange} onIncrease={this.props.onIncrease}/>
                ))}      
            </main>
        )
    }
}

export default ShopingCart;