import React from 'react';
import ShopAlDropdown from './shop-all-dropdown.component';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import toggleMenuHidden from '../../redux/shop-all-dropdown/shop-all-dropdown.action';

import './shop-all-menu.style.css';

const ShopAllMenu = ({toggleMenuHidden, menuHidden}) => (
    <div className='menu-container'>
        <div className='menu-title'>
                <Link className='shop-all' to='/shop-all'>SHOP ALL</Link>
            </div>
            <div className='menu-title'>
                <Link className='shop-by-collections' to='/directory'>COLLECTIONS</Link>
                <div className='dropdown-toggle-btn' onClick={toggleMenuHidden}>&#xFF0B;</div>
            </div>
            <div>
                {
                    menuHidden ? null : <ShopAlDropdown />
                }
            </div>
    </div>
   
);

const mapDispatchToProps = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden())
});

const mapStateToProps = (state) => ({
    menuHidden: state.shopAllDropdown.menuHidden
});



export default connect(mapStateToProps, mapDispatchToProps)(ShopAllMenu);