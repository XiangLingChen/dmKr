import React from 'react';

import SKINCARE from './assets/directory-preview-06.jpg'
import CLEANSING from './assets/directory-preview-07.jpg'
import BODYCARE from './assets/directory-preview-08.jpg'
import HAIR from './assets/directory-preview-09.jpg'

import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {ReactComponent as Logo} from '../nonRwdNav/dmLogo.svg';
import {auth} from '../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';

import {selectdirectoriesOverview} from '../../redux/directory/bestSellers.selector';


import './nonRwdNav.style.css'

const Toolbar = ({currentUser, hidden, directoryDropdown, history}) => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_navigation-content">
                <Link className='logo-container' to="/">
                    <Logo className='logo' />
                </Link>
                <div className='options-container'>
                    <div className='options1'>
                        <div className='shopall-option'>
                            <Link className='option shopAll' to='/shopall'>SHOP ALL</Link>
                                    <div className='shopall-dropdown'>
                                        <div className='shopall-dropdown-content'>
                                            <div className='shopall-dropdown-col1'>
                                                <div className='dropdown-directory'>SKIN CARE</div>
                                                    <div className='dropdown-list-of-series'>
                                                        <Link className='dropdown-series' to='/shopall/beautyEffect'>Beauty Effect</Link>
                                                        <Link className='dropdown-series' to='/shopall/aqua'>Aqua</Link>
                                                        <Link className='dropdown-series' to='/shopall/q10'>Q10</Link>
                                                        <Link className='dropdown-series' to='/shopall/aloeVera'>Aloe Vera</Link>
                                                        <Link className='dropdown-series' to='/shopall/almond'>Almond</Link>
                                                        <Link className='dropdown-series' to='/shopall/lipBalm'>Lip</Link>
                                                    </div>
                                                </div>
                                            <div className='shopall-dropdown-col2'>
                                                <div className='dropdown-directory'>CLEANSING</div>
                                                    <div className='dropdown-list-of-series'>
                                                        <Link className='dropdown-series' to='/shopall/makeupRemover'>Makeup Remover</Link>
                                                        <Link className='dropdown-series' to='/shopall/cleansing'>Cleansing</Link>
                                                    </div>
                                                <div className='dropdown-directory'>BODY CARE</div>
                                                    <div className='dropdown-list-of-series'>
                                                        <Link className='dropdown-series' to='/shopall/bodyMilk'>Body Milk</Link>
                                                        <Link className='dropdown-series' to='/shopall/bodyFit'>Body Fit</Link>
                                                    </div>
                                                <div className='dropdown-directory'>HAIR</div>
                                                    <div className='list-of-series'>
                                                        <Link className='dropdown-series' to='/shopall/shampoo'>Shampoo</Link>
                                                        <Link className='dropdown-series' to='/shopall/conditioner'>Conditioner</Link>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                            
                        </div>
                        <div className='bestseller-option'>
                            <Link className='option bestseller' to='/bestSellers'>BEST-SELLERS</Link>
                                <div className='bestSellers-dropdown'>
                                    <div className='bestSellers-dropdown-content'>
                                        <Link className='bestSellers-dropdown-frame'   to='/bestSellers/skincare'>
                                            <img className='bestSellers-dropdown-img' src={SKINCARE} alt='' />
                                            <div>
                                                <p className='bestSellers-dropdown-title'>SKIN CARE</p>
                                            </div>
                                        </Link>
                                    
                                        <Link className='bestSellers-dropdown-frame'  to='/bestSellers/cleansing'>
                                            <img className='bestSellers-dropdown-img' src={CLEANSING} alt='' />
                                            <div>
                                                <p className='bestSellers-dropdown-title'>CLEANSING</p>
                                            </div>
                                        </Link >
                                  
                                        <Link className='bestSellers-dropdown-frame'  to='/bestSellers/bodycare'>
                                            <img className='bestSellers-dropdown-img' src={BODYCARE} alt='' />
                                            <div>
                                                <p className='bestSellers-dropdown-title'>BODY CARE</p>
                                            </div>
                                        </Link >
                             
                                        <Link className='bestSellers-dropdown-frame'  to='/bestSellers/hair'>
                                            <img className='bestSellers-dropdown-img' src={HAIR} alt='' />
                                            <div>
                                                <p className='bestSellers-dropdown-title'>HAIR</p>
                                            </div>
                                        </Link >
                                    </div>
                                </div>
                        </div> 
                        <div className='about-option'>
                            <Link className='option about' to='/about'>ABOUT</Link>
                        </div>                      
                    </div>
                
                    <div className='options2'>
                        {
                            currentUser ?
                            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                            :
                            <Link className='option' to='/signin'>SIGN IN</Link>
                        }  
                        <CartIcon className='cart'/>
                        {
                        hidden? null : <CartDropdown />
                        }
                    </div>
                </div>
            </div> 

        </nav>

        <nav className="mobile_navigation">
            <div className='mobile-options-container'>
                <div className='mobile-options1'>
                    <Link className='option' to='/shopall'>SHOP ALL</Link>
                    <Link className='option' to='/bestSellers'>BEST-SELLERS</Link>
                    <Link className='option' to='/about'>ABOUT</Link>
                </div>
            </div>
            
        </nav>
    </header>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    directoryDropdown: selectdirectoriesOverview
});

export default withRouter(connect(mapStateToProps)(Toolbar));