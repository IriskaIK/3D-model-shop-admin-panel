import React, {SetStateAction} from "react";

import {useAppSelector} from "store/hooks.ts";
import {RootState} from "store/store.ts";
import {useDispatch} from "react-redux";
import {
    reset as searchOptionsReset,
    setCity,
    setEmail,
    setPhone, setPostOffice,
    setRegion
} from "store/usersSearchBar/usersSearchBarSlice.ts";
import GenericControlBar from "components/TableComponents/GenericControlBar.tsx";


const UsersControlBar: React.FC = () => {


    const state = useAppSelector((state: RootState) => state.usersSearchBar);
    const dispatch = useDispatch();

    const handleReset = (setSearchValue: React.Dispatch<SetStateAction<string>>) => {
        setSearchValue("");
        dispatch(searchOptionsReset())
    }

    const handleAddOption = (currentSearchOption: (string | null),
                             searchValue: string,
                             setSearchValue: React.Dispatch<SetStateAction<string>>) => {
        if (!currentSearchOption || !searchValue) return;

        switch (currentSearchOption.toLowerCase()) {
            case "phone":
                dispatch(setPhone(searchValue));
                break;
            case "email":
                dispatch(setEmail(searchValue));
                break;
            case "city":
                dispatch(setCity(searchValue));
                break;
            case "region":
                dispatch(setRegion(searchValue));
                break;
            case "post office":
                dispatch(setPostOffice(searchValue));
                break;
            default:
                break;
        }
        setSearchValue("");
    };




    return (
        <GenericControlBar
            handleReset={handleReset}
            handleAddOption={handleAddOption}
            state={state}
            searchOptions={[
                {value: "Phone", label: "Phone"},
                {value: "Email", label: "Email"},
                {value: "City", label: "City"},
                {value: "Region", label: "Region"},
                {value: "Post office", label: "Post office"},
            ]}>

        </GenericControlBar>
    )
}
export default UsersControlBar;