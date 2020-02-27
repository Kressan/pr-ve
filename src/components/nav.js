import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Forside</Link></li>
                    <li><Link to="/produkter">Produkter</Link></li>
                    <p id="bageriet">Bageriet</p>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;