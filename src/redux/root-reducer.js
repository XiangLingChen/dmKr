import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import dropdownMenuReducer from './shop-all-dropdown/shop-all-dropdown.reducer';

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shopAllDropdown: dropdownMenuReducer
});

export default persistReducer(persistConfig, rootReducer);