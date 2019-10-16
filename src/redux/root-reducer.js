import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

import dropdownMenuReducer from './shop-all-dropdown/shop-all-dropdown.reducer';
import shopReducer from './shop/shop.reducer';
import BestSellersReducer from './directory/bestSellers.reducer';
import directoyHoverReducer from './directoy-hover/directoy-hover.reducer';

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shopAllDropdown: dropdownMenuReducer,
    shop: shopReducer,
    bestSellers: BestSellersReducer,
    bestSellersHover: directoyHoverReducer
});

export default persistReducer(persistConfig, rootReducer);