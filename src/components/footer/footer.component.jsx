import React from 'react';
import FACEBOOK from './assets/facebook.svg';
import INSTAGRAM from './assets/instagram.svg';
import YOUTUBE from './assets/youtube.svg';


import GoTop from '../go-top/go-top.component';

import {Link} from 'react-router-dom';
import {withRouter, Redirect} from 'react-router-dom';
import './footer.style.css';

const Footer = ({match, history}) => (
    <div className='footer-container'>

        <div className='footer-content-container1'>
            <div className='footer-content'>
                <div className='social-nav-and-top'>
                    <div className='social-and-nav'>
                        <div className='social-icon'>
                            <img className='facebook-icon' src={FACEBOOK} alt=''/>
                            <img className='instagram-icon' src={INSTAGRAM} alt=''/>
                            <img className='youtube-icon' src={YOUTUBE} alt=''/>
                        </div>
                        <div className='footer-nav'>
                            <Link className='footer-nav-shopall' to='/shopall'>SHOP ALL</Link>
                            <Link className='footer-nav-bestseller' to='/bestSellers'>BEST-SELLERS</Link>
                            <Link className='footer-nav-about' to='/about'>ABOUT</Link>
                            <Link className='footer-nav-contact' to='/contact'>CONTACT US</Link>
                        </div>
                    </div>
                    <div className='back-to-top'>
                        <div className='back-to-top-content'>
                            <GoTop scrollStepInPx="150" delayInMs="40"/>
                        </div>
                    </div>      
                </div>
            </div>
        </div>   

        <div className='footer-content-container2'>
                <div className='copyright'>
                    <p>© 2019 dm-drogerie markt GmbH + Co. KG  All Rights Reserved.</p>
                </div>
            
        </div>   

    </div>
);



export default withRouter(Footer);