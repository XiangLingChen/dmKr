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
                    name: 'Aqua Moisturizing Serum',
                    imageUrl: 'https://i.imgur.com/caFt7A0.jpg',
                    price: "$ 15"
                },
                {
                    id: 1,
                    name: 'Soft Cleansing Foam',
                    imageUrl: 'https://i.imgur.com/W74Bj1Z.jpg',
                    price: "$ 10"
                },
                {
                    id: 2,
                    name: 'Micellar Cleansing Water',
                    imageUrl: 'https://i.imgur.com/5KYr2sz.jpg',
                    price: "$ 20"
                },
                {
                    id: 3,
                    name: 'Micellar Cleansing Water',
                    imageUrl: 'https://i.imgur.com/WWnFGtX.jpg',
                    price: "$ 20"
                },
                {
                    id: 4,
                    name: 'Cream Peeling',
                    imageUrl: 'https://i.imgur.com/x0Hgkey.jpg',
                    price: "$ 12"
                },
                {
                    id: 5,
                    name: 'Creamsoap Ginger & Lemon',
                    imageUrl: 'https://i.imgur.com/wqV3Rml.jpg',
                    price: "$ 10"
                },
                {
                    id: 6,
                    name: 'BodyFit Gel-Creme',
                    imageUrl: 'https://i.imgur.com/cWS86RG.jpg',
                    price: "$ 22"
                },
                {
                    id: 7,
                    name: 'Creamshower Sensitive',
                    imageUrl: 'https://i.imgur.com/CtLMIbP.jpg',
                    price: "$ 24"
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

