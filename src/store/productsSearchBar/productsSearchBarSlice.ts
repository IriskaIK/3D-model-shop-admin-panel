import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ProductsSearchBarState {
    title : string | null;
    offset: number | null;
    inStock : boolean | null;
    category : number[] | null;
    tagsIds : number[] | null;
    tags : string[] | null;
    minPrice : string | null;
    maxPrice : string | null;
}

const initialState: ProductsSearchBarState = {
    title : null,
    offset : null,
    inStock : null,
    category : null,
    tags : null,
    tagsIds : null,
    maxPrice : null,
    minPrice : null
};

const productsSearchBarSlice = createSlice({
    name: 'productsSearchBar',
    initialState,
    reducers: {
        setOffset: (state, action: PayloadAction<number | null>) => {
            state.offset = action.payload;
        },
        setInStock: (state, action: PayloadAction<boolean | null>) => {
            state.inStock = action.payload;
        },
        setCategory: (state, action: PayloadAction<number[] | null>) => {
            state.category = action.payload;
        },
        setTagId: (state, action: PayloadAction<number>) => {
            if(state.tagsIds !== null){
                state.tagsIds = [...state.tagsIds, action.payload];
            }else {
                state.tagsIds = [action.payload];
            }
        },
        setTagTitle: (state, action: PayloadAction<string>) => {
            if(state.tags !== null){
                state.tags = [...state.tags, action.payload];
            }else{
                state.tags = [action.payload];
            }
        },
        setMaxPrice: (state, action: PayloadAction<string | null>) => {
            state.maxPrice = action.payload;
        },
        setMinPrice : (state, action: PayloadAction<string | null>) => {
            state.minPrice = action.payload;
        },
        setTitle: (state, action: PayloadAction<string | null>) => {
            state.title = action.payload;
        },
        reset: () => initialState,
    },

});
export const {
    reset,
    setTagId,
    setCategory,
    setMaxPrice,
    setInStock,
    setMinPrice,
    setOffset,
    setTitle,
    setTagTitle
} = productsSearchBarSlice.actions;
export default productsSearchBarSlice.reducer;
