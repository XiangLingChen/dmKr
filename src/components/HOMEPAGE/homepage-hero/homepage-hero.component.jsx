import React from 'react';
import Aqua from '../homepage-hero/assets/aqua.jpg';
import Aloe from '../homepage-hero/assets/aloeVera.jpg';
import {withRouter} from 'react-router-dom';
import './homepage-hero.style.css'

const HompepageHero = ({history}) => (
    <div className="page-container">
        <div className="homepage-hero">       
                <div className="hero-items">
                    <div className="hero-content">
                        <div className="banner-container">
                            <img className="HeroBanner" src={Aqua} alt='' onClick={ ()=> history.push('./shopall/aqua')}/>    
                        </div>
                        <div className="content-container">
                            <h1 className="title">DRY SKIN SAVIORS !</h1>
                            <p className="description">Invigorating Moisture:
                            Balea Aqua Collection refreshes dehydrated, depleted-looking skin and softens wrinkles.</p>
                            <p className="CTA" onClick={ ()=> history.push('./shopall/aqua')}>Shop Now</p>
                        </div>
                    </div>
                </div>
                <div className="hero-items">
                    <div className="hero-content">
                        <div className="banner-container">
                            <img className="HeroBanner" src={Aloe} alt='' onClick={ ()=> history.push('./shopall/cleansing')}/>
                        </div>
                        <div className="content-container">
                            <h1 className="title">NEW ! CLEANSING CHOICE</h1>
                            <p className="description">Thorough and gentle cleansing :
                            with a creamy and delicate texture : Balea gentle cleansing foam pampers and nourishes your skin. 
                            </p>
                            <p className="CTA" onClick={ ()=> history.push('./shopall/cleansing')}>Shop Now</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    
);

export default withRouter(HompepageHero);