import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UsersSearchBarState {
    phone : string | null;
    email : string | null;
    city : string | null;
    region : string | null;
    postOffice : string | null;
}

const initialState: UsersSearchBarState = {
    phone : null,
    email : null,
    city : null,
    region : null,
    postOffice : null
};

const usersSearchBarSlice = createSlice({
    name: 'usersSearchBar',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<string | null>) => {
            state.phone = action.payload;
        },
        setEmail: (state, action: PayloadAction<string | null>) => {
            state.email = action.payload;
        },
        setCity: (state, action: PayloadAction<string | null>) => {
            state.city = action.payload;
        },
        setRegion: (state, action: PayloadAction<string | null>) => {
            state.region = action.payload;
        },
        setPostOffice: (state, action: PayloadAction<string | null>) => {
            state.postOffice = action.payload;
        },
        // Optional: Add a method to reset all fields to initial state
        reset: () => initialState,
    },

});
export const {
    setPhone,
    setEmail,
    setCity,
    setRegion,
    setPostOffice,
    reset,
} = usersSearchBarSlice.actions;
export default usersSearchBarSlice.reducer;
