import MenuDropdownTypes from './shop-all-dropdown.types';

const INITIAL_STATE = {
    menuHidden: true
};

const dropdownMenuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MenuDropdownTypes.TOGGLE_MENU_HIDDEN:
            return {
                ...state,
                menuHidden: !state.menuHidden
            }
        default:
            return state;
    }
}

export default dropdownMenuReducer;

