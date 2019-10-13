import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import './collections-item-card.style.css';



const CollectionsItemCard = ({item, addItem}) => {
    const { name, price, imageUrl } = item;

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
    
            <button className="shopAll-custom-btn" onClick={ () => addItem(item)} >
                Add to Cart
            </button>
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(CollectionsItemCard);