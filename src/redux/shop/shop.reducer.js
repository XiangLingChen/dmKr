import ALL_PRODUCT_DATA from './shop.data';

const INITIAL_STATE = {
    collections: ALL_PRODUCT_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default shopReducer;