import React from 'react';
import Q10CardDetail from './details-of-product.component';
import q10ProductList from './Q10-product-list';
import './Q10-product-list.style.css';

class Q10Collection extends React.Component {
    constructor () {
        super();

        this.state = {
            q10ProductOverview: q10ProductList.items
        }

    }

    render() {
        const {q10ProductOverview} = this.state;
        return(
            <div className="q10-page">
               
                <div className='page-menu'>
                    
                </div>
                <div className="q10-page-container">
                    <div className="q10-page-overview">
                        {
                            q10ProductOverview.map( (item) => (
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

