
import React, {Component} from 'react';
import data from '../../HOMEPAGE/collection/data';
import SlideShow from '../../HOMEPAGE/collection/collectionSlideShow.component';


import './collection.style.css'

class Collection extends Component {
   constructor(props) {
        super(props);

        this.state = {
            property: data.properties[0]
        }
   }

   nextProperty = () => {
       const currentIndex = this.state.property.index;
       const newIndex = currentIndex + 1;
 
       this.setState({
        property: data.properties[newIndex]
       });
   }

   prevProperty = () => {
       const currentIndex = this.state.property.index;
       const newIndex = currentIndex - 1;
       this.setState({
        property: data.properties[newIndex]
       });
   }

   render() {
       const {property} = this.state;
       return (
           <div className="slidePage">    {/* width: 100% */}
                <div className="slidePage-container">    {/* width: 90% */}
                    <h1 className="slidePageTitle">COLLECTIONS</h1>
                    
                    <div className="content">
                        <SlideShow property={property}/>
                    </div>
                    <div className='pageNumber-btn'>
                        <div className='page-number'>
                            <p>{property.index + 1} / 8</p>
                        </div>

                        <div className="btn-container">
                            <button
                                className="arrow-left"
                                onClick={() => this.prevProperty()}
                                disabled={property.index===0}>      
                                <div className='nav-arrow-left'>&#10229;</div>
                            </button>

                            <button
                                className="arrow-right"
                                onClick={() => this.nextProperty()}
                                
                                disabled={property.index===data.properties.length-1}>
                                <div className='nav-arrow-right'>&#10230;</div>
                            </button>
                        </div>
                    
                    </div>
                    
                   
                </div>
            </div>

       )
   }
}

export default Collection;