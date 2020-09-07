import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import ShopingCart from './shopingCart';
import Navbar from './navbar';
import Home from './home';
import Menu from './menu';
import About from './about';
import Contact from './contact';
import NotFound from './notFound';
import ProductDetails from './productDetails';
import Login from './login';
import Admin from './admin';
import Edit from './edit';
import Add from './add';
class App extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        await fetch('https://iti-react-cource.herokuapp.com/products')
        .then(response => response.json())
        .then(products => {
            console.log(products)
            this.setState({products})
        })
    }

    handleInCartChange = (product) => {
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        //Edit
        if (products[index].isInCart===false) {
            products[index].count=1;
        } else {
            products[index].count=0;
        }
        products[index].isInCart = !products[index].isInCart;
        
        //Set State
        this.setState({ products });
    };

    handleIncrease = (product) => {
        let products = [...this.state.products];
        let index = products.indexOf(product);
        products[index].count ++
        this.setState({products});
    }

    handleAdd = (product) => {
        let products = [...this.state.products];
        let index = products.indexOf(product);
        products[index].count = products[index].count +1;
        this.setState({products});
    }

    handleChange = (product) => {
        let products = [...this.state.products];
        let index = products.indexOf(product);
        products[index].count = 0;
        this.setState({products});
    }

    handleReset = () => {
        let products = [...this.state.products] 
        products = products.map(p => {
            p.count = 0;
            return p;
        });
        this.setState({products});
    }

    handleDelete = product => {
        const oldProducts = [...this.state.products];
        const products = this.state.products.filter(p => p.id!==product.id);
        this.setState({products});
        fetch(`https://iti-react-cource.herokuapp.com/products/${product.id}`, {method: 'DELETE'})
        .then(res => {
            console.log(res);
            if (res.ok) {
                console.log('Product deleted.');
            } else {
                alert(res.statusText);
                this.setState({products: oldProducts})
            }
        })        
    }

    render() {
        return (
            <React.Fragment>
                <Navbar productsCount={this.state.products.filter(p => p.count>0).length}/>
            <main className="container">
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>      
                <Route path="/login" component={Login}/>        
                <Route path="/cart" render={props => (
                        <ShopingCart onReset={this.handleReset} onChange={this.handleChange} onIncrease={this.handleIncrease} products={this.state.products.filter(product => product.isInCart===true)} {...props}/>
                    )}
                />
                <Route path="/menu" render={props => (
                        <Menu onAdd={this.handleInCartChange} products={this.state.products} {...props}/>
                )} />  
                <Route path="/admin" render={props => (
                    <Admin onDelete={this.handleDelete} products={this.state.products} {...props} />
                )} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/add" component={Add} />
                <Route path="/products/:id/:name?" component={(props) => <ProductDetails products={this.state.products} {...props}/>}/>
                <Route path="/not-found" component={NotFound}/>
                <Redirect from="/" exact to="/home"/>
                <Redirect to="/not-found"/>
                
            </Switch></main>
                {/* <ShopingCart onReset={this.handleReset} onDelete={this.handleDelete} onIncrease={this.handleIncrease} products={this.state.products}/>            */}
            </React.Fragment>
        )
    }
}

export default App;