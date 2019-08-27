import React from 'react';
import {Link} from 'react-router-dom';
import './sideDrawer.style.css';

const SideDrawer = props => {
    let drawerClasses = 'sideDrawer-container';
    if (props.show) {
        drawerClasses = 'sideDrawer-container open';
    }
    return (
        <nav className={drawerClasses}>
            <div className="container">
            <Link className='sideDrawer-item' to='/collections'>COLLECTIONS</Link>
            <Link className='sideDrawer-item' to='/bestsellers'>BEST-SELLERS</Link>
            <Link className='sideDrawer-item' to='/about'>ABOUT</Link>
            <Link className='sideDrawer-item' to='/login'>LOG IN</Link>
            </div>   
        </nav>
    );
}

export default SideDrawer;