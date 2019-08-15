
import React, {Component} from 'react';
import data from '../slideShow(with Transition)/data';
import SlideShow from '../../HOMEPAGE/slideShow/slideShow.component';

import './slideParent.style.css'

class SlideParent extends Component {
   constructor(props) {
        super(props);

        this.state = {
            property: data.properties[0]
        }
   }

   nextProperty = () => {
       const newIndex = this.state.property.index+1;
       this.setState({
        property: data.properties[newIndex]
       });
   }

   prevProperty = () => {
       const newIndex = this.state.property.index-1;
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

                    <div className="btn-container">
                        <button
                            className="arrow-left"
                            onClick={() => this.prevProperty()}
                            disabled={property.index===0}>      
                        PREV
                        </button>

                        <button
                            className="arrow-right"
                            onClick={() => this.nextProperty()}
                            disabled={property.index===data.properties.length-1}>
                        NEXT
                        </button>
                    </div>
                    
                   
                </div>
            </div>

       )
   }
}

export default SlideParent;