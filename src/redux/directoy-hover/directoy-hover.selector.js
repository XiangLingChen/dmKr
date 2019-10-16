import {createSelector} from 'reselect';


const BESTSELLER_DIRECTORY_ID_MAP = {
    skincare : 1,
    cleansing : 2,
    bodycare : 3,
    hair : 4
}

const selectDirectoryHover = state => state.bestSellersHover;

export const selectdirectoryHoverPreview = createSelector(
    [selectDirectoryHover],
    selectDirectories => selectDirectories.directoryHoverPreview
)

export const selectdirectoryHoverOverview = collectionUrlParam => 
    createSelector(
        [selectdirectoriesPreview],
        bestSellers => bestSellers.find( bestSeller => bestSeller.id === BESTSELLER_ID_MAP[collectionUrlParam])
    )

