import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../res-nav/dmLogo.svg';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton.component';

import './res-nav.style.css';

const Toolbar = (props) => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/collections'>COLLECTIONS</Link>
                <Link className='option' to='/bestsellers'>BEST-SELLERS</Link>
                <Link className='option' to='/about'>ABOUT</Link>
                <Link className='option' to='/login'>SIGN IN</Link>
                
   
            </div>
            <div className="hamburgerBtn">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
);

export default Toolbar;