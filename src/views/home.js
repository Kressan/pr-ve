import React, { Component } from 'react';


import ImageSlider from '../components/ImageSlider';
import Forsidesapi from '../components/forsidesapi';
import Nyhedsbrev from '../components/nyhedsbrev';

import article1 from '../img/article.jpg'
import article2 from '../img/article2.jpg'
import article3 from '../img/article3.jpg'


class Home extends Component {
    render() {
        return (
            <main id="forside">
                < ImageSlider />
                <section id="viskaber">
                    <h2>
                        Vi skaber lækkert brød!
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus consectetur, esse illum aspernatur quod rerum dolorum debitis eos culpa hic quaerat facere ullam quibusdam perferendis unde atque provident amet facilis.
                    </p>

                    <section id="skaber">
                        <div id="kort">
                        <div id="img">
                        <img src={article1} alt="brød"/>
                        </div>
                        <div id="title">
                        <h3>
                            Kreativitet dyrkes
                        </h3>
                        </div>
                        <div id="tekst">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br/>
                         Corporis voluptas temporibus impedit asperiores non laudantium.
                        </div>
                        </div>


                        <div id="kort">
                        <div id="img">
                        <img src={article2} alt="brød"/>
                        </div>
                        <div id="title">
                        <h3>
                            Vi elsker brød
                        </h3>
                        </div>
                        <div id="tekst">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br/>
                         Corporis voluptas temporibus impedit asperiores non laudantium.
                        </div>
                        </div>


                        <div id="kort">
                        <div id="img">
                        <img src={article3} alt="brød"/>
                        </div>
                        <div id="title">
                        <h3>
                            Sans for detajler
                        </h3>
                        </div>
                        <div id="tekst">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br/>
                         Corporis voluptas temporibus impedit asperiores non laudantium.
                        </div>
                        </div>
                    </section>
                </section>
                < Nyhedsbrev />
                < Forsidesapi />
            </main>
        );
    }
}

export default Home;