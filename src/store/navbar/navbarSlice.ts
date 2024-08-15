import { createSlice } from '@reduxjs/toolkit';

export interface NavbarState {
    isOpened: boolean;
}

const initialState: NavbarState = {
    isOpened: true,
};

const navbarSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleNavbar(state : NavbarState) {
            state.isOpened = !state.isOpened;
        },
    },
});

export const { toggleNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
