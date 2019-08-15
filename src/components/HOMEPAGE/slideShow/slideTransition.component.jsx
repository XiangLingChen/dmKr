import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import SlideShow from '../../HOMEPAGE/slideShow/slideShow.component';
import './slideTransition.style.css'

const SlideTransition = ({property})=> {
    return(
        <div>
            <TransitionGroup>
                <CSSTransition
                    key={property._id}
                    timeout={1000}
                    classNames='fade'
                >
                    <SlideShow property={property}/>
                </CSSTransition>
            </TransitionGroup>
            
        </div>
    )
 
}

export default SlideTransition;