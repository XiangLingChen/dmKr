import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.style.css';

class HeaderCarousel extends Component {
    render () {
        return(
            <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay interval={6000}>
                <div className='img-wrapper1'>
                    <Link className='header-content1' to='/shopall/q10'>
                        <h2 className='resHeader-title1'>Q10 COLLECTION</h2>
                        <div className='ContentTextContainer'>
                            <p className='content'>Tightens and Strengthens :</p>
                            <p className='content'>Effective Energy Source for Your Skin.</p>
                        </div>
                        <h3 className="CTA">Shop Now</h3>
                    </Link>
                </div>
                <div className='img-wrapper2'>
                    <Link className='header-content2'  to='/shopall/beautyEffect'>
                        <h2 className='resHeader-title2'>BEAUTY EFFECT</h2>
                        <div className='ContentTextContainer'>
                            <p className='content'>Increasing the Elasticity of Your Skin :</p>
                            <p className='content'>Supporting Cell Activity and Alleviating Wrinkles.</p>
                            
                        </div>
                        <h3 className="CTA">Shop Now</h3>
                    </Link>
                </div>
                <div className='img-wrapper3'>
                    <Link className='header-content3'  to='/shopall/shampoo'>
                        <div className='ContentTextContainer3'>
                            <p className='content3'>THE TREATMENT YOUR HAIR IS CRAVING</p>
                        </div>
                        <h3 className="CTA3">Shop Now</h3>
                    </Link>
                </div>
           
                
            </Carousel>
        );
    }
}

export default HeaderCarousel;