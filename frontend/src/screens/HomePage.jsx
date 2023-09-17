import React from 'react'
import Header from '../components/Header'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../images/carousel1.png";
import img2 from "../images/carousel5.png";
import img3 from "../images/carousel3.jpg";

const HomePage = () => {
  return (
    <>
        <Header/>
        <Carousel>
                <div>
                    <img src={img1} height="400px"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} height="300px"/>
                    <p className="legend">Legend 3</p>
                </div>
        </Carousel>
    </>
  )
}

export default HomePage