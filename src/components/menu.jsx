import React, { Component } from 'react';

class Menu extends Component {
    state= {}
    
    render() {
        let cartClass  = "";
 
            
        return (
            <React.Fragment>
                <h1>Menu</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.props.products.map(product => (
                        cartClass = product.isInCart === false ? "fas fa-cart-plus noCount" : "fas fa-cart-plus activeCart",
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            
                            <td><i onClick={() => this.props.onAdd(product)} className={cartClass}></i></td>
                        </tr>
                        ))}     
                    </tbody>
                </table>
            </React.Fragment>           
        )
    }
}

export default Menu