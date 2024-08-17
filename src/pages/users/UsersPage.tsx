import React, {useEffect} from "react";
import {Divider} from "@mantine/core";
import {fetchUsers} from "services/userService.ts";
import {useAppSelector} from "store/hooks.ts";
import {RootState} from "store/store.ts";
import {setUsers} from "store/usersTable/usersTableSlice.ts";
import { useAppDispatch} from "store/hooks.ts";

import UsersControlBar from "pages/users/TableComponents/UsersControlBar.tsx";
import UsersTable from "pages/users/TableComponents/UsersTable.tsx";

const UsersPage : React.FC = () => {
    const dispatch = useAppDispatch();

    const searchBar = useAppSelector((state: RootState ) => state.usersSearchBar);

    const users = useAppSelector((state : RootState) => state.usersTable.users)
    useEffect(() => {
        const getUsers = async () => {
            try {
                console.log('in user page req')
                const data = await fetchUsers(searchBar);
                dispatch(setUsers(data.users));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUsers();
    }, [searchBar]);



    return (
        <>
            <UsersControlBar></UsersControlBar>
            <Divider my="md" />

            <UsersTable tableItems={users}></UsersTable>
        </>
    )
}

export default UsersPage