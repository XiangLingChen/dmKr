import React from 'react';

import './collections-item-card.style.css';



const CollectionsItemCard = ({name, price, imageUrl}) => {


 
    return(
        <div className="shopAll-card">
            <div className="shopAll-content">
                <div className="shopAllProductImage">
                    <img src={imageUrl} alt=''/>
                </div>
                <div className="shopAllProductText">
                    <div className="shopAllProductName">{name}</div>
                    <div className="shopAllProductPrice">$ {price}</div>
                </div>
            </div>
    
            <button className="shopAll-custom-btn">
                Add to Cart
            </button>
        </div>
    );
}



export default CollectionsItemCard;