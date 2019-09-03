import React from 'react';

import './must-have-card.style.css';

const MustHaveCard = ({name, price, imageUrl}) => (
 

    <div className="must-have-card">
        
            <div className="productImage">
                <img src={imageUrl} alt=''/>
            </div>
            <div className="productContent">
                <div className="content name">{name}</div>
                <div className="content price">{price}</div>
            </div>
            
            <button className="custom-btn-hm">Add to Cart</button>
        

    </div>




    
        


)


export default MustHaveCard;
