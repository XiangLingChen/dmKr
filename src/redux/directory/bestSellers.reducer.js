import BEST_PRODUCT_DATA from './bestSellers.data';


const INITIAL_STATE = {
    directoriesPreview : BEST_PRODUCT_DATA
};

const BestSellersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default BestSellersReducer;