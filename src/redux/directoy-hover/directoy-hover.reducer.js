import DIRECTORY_HOVER_DATA from './directoy-hover.data';

const INITIAL_STATE = {
    directoyHover: DIRECTORY_HOVER_DATA
};

const directoyHoverReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoyHoverReducer;