import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from "services/productService.ts";

export interface UsersTableState {
    offset : number,
    products : IProduct[]
}

const initialState: UsersTableState = {
    offset : 0,
    products : []
};

const productsTableSlice = createSlice({
    name: 'productsTable',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload;
        },
        setOffset: (state, action: PayloadAction<number>) => {
            state.offset = action.payload;
        },
        reset: () => initialState,
    },

});
export const {
    setProducts,
    setOffset,
    reset,
} = productsTableSlice.actions;
export default productsTableSlice.reducer;
