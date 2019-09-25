import React from 'react';
import Q10CardDetail from './details-of-product.component';

import './Q10-product-list.style.css';

class Q10Collection extends React.Component {
    constructor () {
        super();

        this.state = {
            items : [
                {
                    id: 0,
                    name: 'Q10 Serum',
                    imageUrl: 'https://imgur.com/3NFMq0m.jpg',
                    price: 20
                },
                {
                    id: 1,
                    name: 'Q10 Eye Cream',
                    imageUrl: 'https://imgur.com/IJ4FyCH.jpg',
                    price: 16
                },
                {
                    id: 2,
                    name: 'Q10 Concentrate',
                    imageUrl: 'https://imgur.com/ohVJXG3.jpg',
                    price: 22
                },
                {
                    id: 3,
                    name: 'Q10 Day Cream',
                    imageUrl: 'https://imgur.com/Dubsmwh.jpg',
                    price: 18
                },
                {
                    id: 4,
                    name: 'Q10 Night Cream',
                    imageUrl: 'https://imgur.com/h1OWW36.jpg',
                    price: 18
                }
    
        
            ]
        }

    }

    render() {
        return(
            <div className="q10-page">
               
                <div className='page-menu'>
                    
                </div>
                <div className="q10-page-container">
                    <div className="q10-page-overview">
                        {
                            this.state.items.map( (item) => (
                                <Q10CardDetail key={item.id} item = {item}/>
                            ))
                        }
                    
                    </div>
                </div>
           
            </div>
    
        
        )
    }
}

export default Q10Collection;

