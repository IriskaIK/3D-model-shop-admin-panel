import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    currentTheme: 'light' | 'dark';
}

const initialState: ThemeState = {
    currentTheme: 'dark',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state: ThemeState) {
            state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
