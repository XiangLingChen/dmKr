import React from 'react';

import ShopAllCardDetail from './Shop-all-card.component';


import './Shop-all-product.style.css';

class ShopAllProducts extends React.Component {
    constructor () {
        super();

        this.state = {
            items : [
                {
                    id: 0,
                    name: 'Beauty Effect Ampoule',
                    imageUrl: 'https://imgur.com/5RIBTFf.jpg',
                    price: 20
                },
                {
                    id: 1,
                    name: 'Beauty Effect Hyaluron Booster',
                    imageUrl: 'https://imgur.com/umzIG1X.jpg',
                    price: 16
                },
                {
                    id: 2,
                    name: 'Beauty Effect Day Cream',
                    imageUrl: 'https://imgur.com/EotsUGC.jpg',
                    price: 18
                },
                {
                    id: 3,
                    name: 'Beauty Effect Night Cream',
                    imageUrl: 'https://imgur.com/0DnPZlt.jpg',
                    price: 18
                },
                {
                    id: 4,
                    name: 'Aqua Serum',
                    imageUrl: 'https://imgur.com/NRsMCHg.jpg',
                    price: 18
                },
                {
                    id: 5,
                    name: 'Aqua Eye Roll-On',
                    imageUrl: 'https://imgur.com/ZAskFYQ.jpg',
                    price: 15
                },
                {
                    id: 6,
                    name: 'Aqua Day Cream',
                    imageUrl: 'https://imgur.com/Z4Lfb6R.jpg',
                    price: 18
                },
                {
                    id: 7,
                    name: 'Q10 Serum',
                    imageUrl: 'https://imgur.com/3NFMq0m.jpg',
                    price: 18
                },
                {
                    id: 8,
                    name: 'Q10 Eye Cream',
                    imageUrl: 'https://imgur.com/IJ4FyCH.jpg',
                    price: 16
                },
                {
                    id: 9,
                    name: 'Q10 Concentrate',
                    imageUrl: 'https://imgur.com/LMbKvgt.jpg',
                    price: 22
                },
                {
                    id: 10,
                    name: 'Q10 Day Cream',
                    imageUrl: 'https://imgur.com/Dubsmwh.jpg',
                    price: 20
                },
                {
                    id: 11,
                    name: 'Q10 Night Cream',
                    imageUrl: 'https://imgur.com/h1OWW36.jpg',
                    price: 20
                },
                {
                    id: 12,
                    name: 'Aloe Vera Toner',
                    imageUrl: 'https://imgur.com/DonaNbx.jpg',
                    price: 12
                },
                {
                    id: 13,
                    name: 'Aloe Vera Day Cream',
                    imageUrl: 'https://imgur.com/ZoYXsvL.jpg',
                    price: 16
                },
                {
                    id: 14,
                    name: 'Aloe Vera Night Cream',
                    imageUrl: 'https://imgur.com/pxfkLql.jpg',
                    price: 16
                },
                {
                    id: 15,
                    name: 'Aloe Vera Eye Cream',
                    imageUrl: 'https://imgur.com/CzlHsSK.jpg',
                    price: 14
                },
                {
                    id: 16,
                    name: 'Aloe Vera Peeling Cream',
                    imageUrl: 'https://imgur.com/Rv2TIAV.jpg',
                    price: 12
                },
                {
                    id: 17,
                    name: 'Aloe Vera Wash Gel',
                    imageUrl: 'https://imgur.com/AUnNv3x.jpg',
                    price: 10
                },
                {
                    id: 18,
                    name: 'Aloe Vera Gentle Foam',
                    imageUrl: 'https://imgur.com/yJkoEsD.jpg',
                    price: 11
                },
                {
                    id: 18,
                    name: 'Almond Flower Toner',
                    imageUrl: 'https://imgur.com/DzHNprj.jpg',
                    price: 12
                },
                {
                    id: 18,
                    name: 'Almond Seed Oil Peeling Cream',
                    imageUrl: 'https://imgur.com/QlRAEUQ.jpg',
                    price: 10
                },
                {
                    id: 18,
                    name: 'Almond Seed Oil Milk',
                    imageUrl: 'https://imgur.com/qlm761z.jpg',
                    price: 15
                },
                {
                    id: 19,
                    name: 'Balm for Sensitive Lip',
                    imageUrl: 'https://imgur.com/EA0VORF.jpg',
                    price: 8
                },
                {
                    id: 20,
                    name: 'Lip Balm Intensive Care',
                    imageUrl: 'https://imgur.com/iI1AYLc.jpg',
                    price: 9
                },
                {
                    id: 21,
                    name: 'Cleansing Water for Dry Skin',
                    imageUrl: 'https://imgur.com/UX2oKVc.jpg',
                    price: 12
                },
                {
                    id: 22,
                    name: 'Cleansing Water for Comination Skin',
                    imageUrl: 'https://imgur.com/VQO6IVD.jpg',
                    price: 12
                },
                {
                    id: 22,
                    name: 'Body Lotion',
                    imageUrl: 'https://imgur.com/ARXUIb2.jpg',
                    price: 15
                },
                {
                    id: 22,
                    name: 'Body Milk',
                    imageUrl: 'https://imgur.com/4BshLeH.jpg',
                    price: 15
                },
                {
                    id: 22,
                    name: 'Body Fit Cream',
                    imageUrl: 'https://imgur.com/Q7gKPHv.jpg',
                    price: 12
                },
                {
                    id: 22,
                    name: 'Body Fit Serum',
                    imageUrl: 'https://imgur.com/hJZnApU.jpg',
                    price: 14
                },
                {
                    id: 22,
                    name: 'Body Fit Toner',
                    imageUrl: 'https://imgur.com/GFvhjSR.jpg',
                    price: 15
                },
        
        
            ]
        }
    }

    render() {
     
        return(
                    <div className="shop-all-page-overview">
                        {
                            this.state.items.map( (item) => (
                                <ShopAllCardDetail key={item.id} item = {item}/>
                            ))
                        }
                    
                    </div>
        )
    }
}

export default ShopAllProducts;

