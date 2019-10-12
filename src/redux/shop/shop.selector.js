import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    beautyEffect: 1,
    aqua: 2,
    q10: 3,
    aloeVera: 4,
    almond: 5,
    lipBalm: 6,
    makeupRemover: 7,
    cleansing: 8,
    bodyMilk: 9,
    bodyFit: 10,
    shampoo: 11,
    conditioner: 12
}

const selectShop = state => state.shop;

export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
);

const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find( 
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);

export default selectCollection;
