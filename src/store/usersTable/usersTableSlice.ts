import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from "services/userService.ts";

export interface UsersTableState {
    offset : number,
    users : IUser[]
}

const initialState: UsersTableState = {
    offset : 0,
    users : []
};

const usersTableSlice = createSlice({
    name: 'usersTable',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        setOffset: (state, action: PayloadAction<number>) => {
            state.offset = action.payload;
        },
        reset: () => initialState,
    },

});
export const {
    setUsers,
    setOffset,
    reset,
} = usersTableSlice.actions;
export default usersTableSlice.reducer;
