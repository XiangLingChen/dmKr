import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../nonRwdNav/dmLogo.svg';
import {auth} from '../firebase/firebase.utils';
import {connect} from 'react-redux';
import './nonRwdNav.style.css'

const Toolbar = ({currentUser}) => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/collections'>COLLECTIONS</Link>
                <Link className='option' to='/bestsellers'>BEST-SELLERS</Link>
                <Link className='option' to='/about'>ABOUT</Link>
                
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }  
   
            </div>
            <div className="hamburgerBtn">
            </div>
        </nav>
    </header>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Toolbar);