import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.style.css';
class HeaderCarousel extends Component {
    render () {
        return(
            <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay interval={6000}>
                <div className='img-wrapper1'>
                    <div className='header-content1'>
                        <h2 className='resHeader-title1'>Q10 COLLECTION</h2>
                        <div className='ContentTextContainer'>
                            <p className='content'>Tightens and Strengthens :</p>
                            <p className='content'>Effective Energy Source for Your Skin.</p>
                        </div>
                        <h3 className="CTA">Shop Now</h3>
                    </div>
                </div>
                <div className='img-wrapper2'>
                    <div className='header-content2'>
                        <h2 className='resHeader-title2'>BEAUTY EFFECT</h2>
                        <div className='ContentTextContainer'>
                            <p className='content'>Increasing the Elasticity of Your Skin :</p>
                            <p className='content'>Supporting Cell Activity and Alleviating Wrinkles.</p>
                            
                        </div>
                        <h3 className="CTA">Shop Now</h3>
                    </div>
                </div>
                <div className='img-wrapper3'>
                    <div className='header-content3'>
                        <div className='ContentTextContainer3'>
                            <p className='content3'>THE TREATMENT YOUR HAIR IS CRAVING</p>
                        </div>
                        <h3 className="CTA3">Shop Now</h3>
                    </div>
                </div>
           
                
            </Carousel>
        );
    }
}

export default HeaderCarousel;