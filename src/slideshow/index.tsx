import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css';

const SlideshowKomplek = () => {
    const images = [
        "slide5.png",
        "slide6.png",
        "slide7.png",
        "slide8.png"
    ]

    return (
        <Slide
            autoplay            
        >
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    {/* <span>Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
        </Slide>
    );
};

export default SlideshowKomplek;