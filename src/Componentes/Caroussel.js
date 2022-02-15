import React from 'react';
import logo1 from '../../src/assets/logo1.png';
import logo2 from '../../src/assets/logo2.png';
import logo3 from '../../src/assets/logo3.png';
import { Carousel } from 'react-responsive-carousel'; 


const Props = {
    duration :5000,
    indicator : true,
    trasitionDuration :500,
    infinite : true,
    arrows: true,
    autoplay: true,
}


const Caroussel = () => {
    return (
        <Carousel {...Props}>
            <div className='eacCaroussel'>
                <div>
                    <img src={logo1} alt="boutique"></img>
                </div>
            </div>
            <div className='eacCaroussel'>
                <div>
                    <img src={logo2} alt="boutique"></img>
                </div>
            </div>
            <div className='eacCaroussel'>
                <div>
                    <img src={logo3} alt="boutique"></img>
                </div>
            </div>
        </Carousel>
    );
};

export default Caroussel;


