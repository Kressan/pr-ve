import React, { Component } from 'react';



class Nyhedsbrev extends Component {
    render() {
        return (
            <section id="nyhedsbrev">
                <div id="info">
                    <h3>Tilmeld dig vores nyhedsbrev</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <form action="get">
                    <div id="flexerino">
                        <div id="letter">
                        <i class="far fa-envelope"></i>
                        </div>
                        <input id="email" type="text" placeholder="Indtast din email..." name="mail" required />
                        <input id="tilmeld" type="button" value="tilmeld"/>
                    </div>
                
                </form>
            </section>
        );
    }
}

export default Nyhedsbrev;