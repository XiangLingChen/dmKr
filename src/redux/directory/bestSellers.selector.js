import {createSelector} from 'reselect';

const BESTSELLER_ID_MAP = {
    skincare : 2,
    cleansing : 3,
    bodycare : 4,
    hair : 5
}

const selectBestSellers = state => state.bestSellers;

export const selectdirectoriesPreview = createSelector(
    [selectBestSellers],
    bestSellers => bestSellers.directoriesPreview
)

export const selectdirectoriesOverview = collectionUrlParam => 
    createSelector(
        [selectdirectoriesPreview],
        bestSellers => bestSellers.find( bestSeller => bestSeller.id === BESTSELLER_ID_MAP[collectionUrlParam])
    )