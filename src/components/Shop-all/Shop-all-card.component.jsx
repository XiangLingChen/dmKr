import React from 'react';

import './Shop-all-card.style.css';



const ShopAllCardDetail = ({item}) => {

    const {name, price, imageUrl} = item;
 
    return(
        <div className="shop-all-card">
            <div className="shop-all-content">
                <div className="shopAllProductImage">
                    <img src={imageUrl} alt=''/>
                </div>
                <div className="shopAllProductText">
                    <div className="ProductName">{name}</div>
                    <div className="ProductPrice">$ {price}</div>
                </div>
            </div>
    
            <button className="shop-all-custom-btn">
                Add to Cart
            </button>
        </div>
    );
}



export default ShopAllCardDetail;