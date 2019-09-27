import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../nonRwdNav/dmLogo.svg';
import {auth} from '../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import './nonRwdNav.style.css'

const Toolbar = ({currentUser, hidden}) => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_navigation-content">
                <Link className='logo-container' to="/">
                    <Logo className='logo' />
                </Link>
                <div className='options-container'>
                    <div className='options1'>
                        <Link className='option' to='/shop'>SHOP</Link>
                        <Link className='option' to='/bestsellers'>BEST-SELLERS</Link>
                        <Link className='option' to='/collections'>COLLECTIONS</Link>
                        <Link className='option' to='/about'>ABOUT</Link>
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
                    <Link className='option' to='/all'>ALL</Link>
                    <Link className='option' to='/bestsellers'>BEST-SELLERS</Link>
                    <Link className='option' to='/collections'>COLLECTIONS</Link>
                    <Link className='option' to='/about'>ABOUT</Link>
                </div>
            </div>
            
        </nav>
    </header>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Toolbar);