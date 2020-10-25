import { createSelector } from 'reselect';

// selector for shop page
const selectShop = state => state.shop;

export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
);

// selector onClick collection-id's matchs the item and takes us to shop Item
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const selectCollection = collectionUrlParam => createSelector (
    [selectCollections],
    collections => 
    collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
);