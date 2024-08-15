import React from "react";
import {Button} from "@mantine/core";
import {fetchUsers} from "services/userService.ts";
import {setUsers} from "store/usersTable/usersTableSlice.ts";
import {useDispatch} from "react-redux";
import {useAppSelector} from "store/hooks.ts";
import {RootState} from "store/store.ts";




const SearchButton: React.FC = () => {
    const dispatch = useDispatch();
    const state = useAppSelector((state: RootState) => state.usersSearchBar);

    const handleSearch = () => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers(state);
                dispatch(setUsers(data.users));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUsers();
    }
    return (
        <Button color="green"
                disabled={
                    Object.entries(state)
                        .filter(([_key, value]) => value !== null)
                        .length === 0}
                onClick={handleSearch}
        >Search</Button>
    )
}

export default SearchButton;