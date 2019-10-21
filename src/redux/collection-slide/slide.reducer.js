import SLIDE_DATA from './slide.data';
import SlideActionTypes from './slide.type';

const INITIAL_STATE = {
    slide: SLIDE_DATA.properties[0]
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SlideActionTypes.PREV_SLIDE:
            return {
                ...state,
                slide: PrevSlide
            };
        case SlideActionTypes.NEXT_SLIDE:
            return {
                ...state,
                slide: NextSlide
            };

        default: 
            return state;
    }
};

export default cartReducer;