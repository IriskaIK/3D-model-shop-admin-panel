import React, {useEffect} from "react";
import {Divider} from "@mantine/core";
import {fetchUsers} from "services/userService.ts";
import {useAppSelector} from "store/hooks.ts";
import {RootState} from "store/store.ts";
import {setUsers} from "store/usersTable/usersTableSlice.ts";
import { useAppDispatch} from "store/hooks.ts";

import ControlBar from "pages/users/TableComponents/ControlBar.tsx";
import TableComponent from "pages/users/TableComponents/TableComponent.tsx";

const UsersPage : React.FC = () => {
    const dispatch = useAppDispatch();

    const state = useAppSelector((state: RootState ) => state.usersSearchBar);

    const users = useAppSelector((state : RootState) => state.usersTable.users)
    useEffect(() => {
        const getUsers = async () => {
            try {
                console.log('in user page req')
                const data = await fetchUsers(state);
                dispatch(setUsers(data.users));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUsers();
    }, [state]);



    return (
        <>
            <ControlBar></ControlBar>
            <Divider my="md" />

            <TableComponent tableItems={users}></TableComponent>
        </>
    )
}

export default UsersPage