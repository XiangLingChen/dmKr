import React from 'react';
import MustHaveCard from '../../HOMEPAGE/must-have-card/must-have-card.component';

import './must-have.style.css';

class MustHave extends React.Component {
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
                    name: 'Aqua Moisturizing Serum',
                    imageUrl: 'https://imgur.com/NRsMCHg.jpg',
                    price: 15
                },
                {
                    id: 2,
                    name: 'Aloe Vera Toner',
                    imageUrl: 'https://imgur.com/DonaNbx.jpg',
                    price: 10
                },
                {
                    id: 3,
                    name: 'Micellar Cleansing Water',
                    imageUrl: 'https://imgur.com/UX2oKVc.jpg',
                    price: 10
                },
                {
                    id: 4,
                    name: 'Lip Balm Intensive Care',
                    imageUrl: 'https://imgur.com/iI1AYLc.jpg',
                    price: 8
                },
                {
                    id: 5,
                    name: 'Q10 Serum',
                    imageUrl: 'https://imgur.com/3NFMq0m.jpg',
                    price: 20
                },
                {
                    id: 6,
                    name: 'Q10 Concentrate',
                    imageUrl: 'https://imgur.com/LMbKvgt.jpg',
                    price: 22
                },
                {
                    id: 7,
                    name: 'Almond Seed Oil Cream',
                    imageUrl: 'https://imgur.com/qlm761z.jpg',
                    price: 14
                }
        
            ]
        }

    }

    render() {
        return(
            <div className="must-have-page">
               
                <div className="must-have-page-title">
                    <h1>MUST-HAVES</h1>
                </div>
                <div className="must-have-page-frame">
                    <div className="must-have-page-overview">
                        {
                            this.state.items.map( (item) => (
                                <MustHaveCard key={item.id} item = {item}/>
                            ))
                        }
                    
                    </div>
                </div>
           
            </div>
    
        
        )
    }
}

export default MustHave;

