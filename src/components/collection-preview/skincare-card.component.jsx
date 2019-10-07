import React from 'react';

import './skincare-card.style.css';



const SkincareCard = ({name, price, imageUrl}) => {


 
    return(
        <div className="skincare-card">
            <div className="skincare-content">
                <div className="skincareProductImage">
                    <img src={imageUrl} alt=''/>
                </div>
                <div className="skincareProductText">
                    <div className="skincareProductName">{name}</div>
                    <div className="skincareProductPrice">$ {price}</div>
                </div>
            </div>
    
            <button className="skincare-custom-btn">
                Add to Cart
            </button>
        </div>
    );
}



export default SkincareCard;