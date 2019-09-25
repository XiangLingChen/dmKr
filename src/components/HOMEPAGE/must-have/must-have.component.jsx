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
                    imageUrl: 'https://imgur.com/IGDA28C.jpg',
                    price: 20
                },
                {
                    id: 1,
                    name: 'Aqua Moisturizing Serum',
                    imageUrl: 'https://imgur.com/8r0a9Az.jpg',
                    price: 15
                },
                {
                    id: 2,
                    name: 'Cleansing Foam Gentle',
                    imageUrl: 'https://imgur.com/zlfNQHi.jpg',
                    price: 10
                },
                {
                    id: 3,
                    name: 'Micellar Cleansing Water',
                    imageUrl: 'https://imgur.com/O6WXccn.jpg',
                    price: 10
                },
                {
                    id: 4,
                    name: 'Lip care intensive',
                    imageUrl: 'https://imgur.com/RZ2Jqon.jpg',
                    price: 8
                },
                {
                    id: 5,
                    name: 'Q10 Serum',
                    imageUrl: 'https://imgur.com/cONxThQ.jpg',
                    price: 20
                },
                {
                    id: 6,
                    name: 'Q10 Concentrate',
                    imageUrl: 'https://imgur.com/HI0mylc.jpg',
                    price: 22
                },
                {
                    id: 7,
                    name: 'Cream Peeling',
                    imageUrl: 'https://imgur.com/nldZpbX.jpg',
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

