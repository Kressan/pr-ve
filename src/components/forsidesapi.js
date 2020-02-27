import React, { Component } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

class Forsidesapi extends Component {
    state = {
        products: [ ],

    }
    componentDidMount(){
        axios.get('/api/products')
            .then(res => {
                console.log(res)
                this.setState({
                    products: res.data.slice(0,8)
                })
            })
    }
    render() {
        const { products } = this.state;
        const productList = products.length ? (
            products.map(
                products => {
                    return(
                        <div id="overall">
                        <div className="kort" key={products.id}>
                        <img class="card-img-top" src={products.filename} alt="Card image cap" />
                        <div class="card-body">
                          <h1 class="card-title">Håndværker</h1>
                          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Impedit sit cum sint illo maxime. Ea dolores praesentium quidem! Dolore necessitatibus voluptate ex quisquam sint.
                            Alias nam ab nisi earum quasi.</p>
                        <div id="link">
                           <Link to="">Se mere</Link> 
                        </div>
                        
                        </div>
                      </div>
                      </div>
                    )
                }
            )
        ) : (
            <div>
                <h2> Intet loaded </h2>
            
            </div>
        )
        return (
            <div className="produkter">
                {productList}
            </div>
        );
    }
}

export default Forsidesapi;