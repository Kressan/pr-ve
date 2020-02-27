import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import pic1 from '../img/slide1.jpg'
import pic2 from '../img/slide2.jpg'
import pic3 from '../img/slide3.jpg'

class ImageSlider extends Component {
    render() {
        return (
            <div>
    <Carousel>
        <img src={pic1} alt="Bageriet"/>
        <img src={pic2} alt="Bageriet"/>
        <img src={pic3} alt="Bageriet"/>
      </Carousel>
            </div>
        );
    }
}

export default ImageSlider;