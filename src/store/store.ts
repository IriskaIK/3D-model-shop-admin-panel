import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice.ts';
import navbarReducer from './navbar/navbarSlice.ts';
import usersSearchBarReducer from './usersSearchBar/usersSearchBarSlice.ts'
import usersTableReducer from "store/usersTable/usersTableSlice.ts";
import productsTableReducer from "store/productsTable/productsTableSlice.ts"
import productsSearchBarReducer from "store/productsSearchBar/productsSearchBarSlice.ts";
const store = configureStore({
    reducer: {
        theme: themeReducer,
        navbar: navbarReducer,
        usersSearchBar: usersSearchBarReducer,
        usersTable: usersTableReducer,
        productsTable : productsTableReducer,
        productsSearchBar: productsSearchBarReducer,
    },
});

export default store;
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore['dispatch']

