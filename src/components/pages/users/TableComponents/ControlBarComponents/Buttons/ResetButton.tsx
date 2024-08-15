import React from "react";
import {Button} from "@mantine/core";
import {useAppSelector} from "store/hooks.ts";
import {RootState} from "store/store.ts";
import {useDispatch} from "react-redux";
import {reset as searchOptionsReset} from "store/usersSearchBar/usersSearchBarSlice.ts";
// import {reset as usersTableReset} from "store/usersTable/usersTableSlice.ts";
// import {fetchUsers} from "services/userService.ts";


interface ResetButtonProps {
    setSearchValue : (searchValue: string) => void;
}


const ResetButton: React.FC<ResetButtonProps> = (props) => {
    const state = useAppSelector((state: RootState) => state.usersSearchBar);
    const dispatch = useDispatch();

    const resetSearchOptions = () => {
        props.setSearchValue("");
        dispatch(searchOptionsReset())

    }

    return (
        <Button
            color="red"
            disabled={
                Object.entries(state)
                    .filter(([_key, value]) => value !== null)
                    .length === 0}
            onClick={resetSearchOptions}
        >Reset options
        </Button>
    )
}

export default ResetButton;