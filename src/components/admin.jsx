import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Admin extends Component {
    state= {}

    render() {
        return (
            <React.Fragment>
                <h1>Admin Page</h1>
                <Link to="add" type="button" className="btn btn-primary">Add</Link>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><Link className="editLink" to={`edit/${product.id}`}><i className="fas fa-edit"></i></Link></td>   
                                <td><i onClick={() => this.props.onDelete(product)} className="fas fa-trash"></i></td>                         
                            </tr>
                        ))}     
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Admin