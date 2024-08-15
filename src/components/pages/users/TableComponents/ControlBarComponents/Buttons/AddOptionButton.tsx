import React from "react";
import {Button} from "@mantine/core";
import {setCity, setEmail, setPhone, setPostOffice, setRegion} from "store/usersSearchBar/usersSearchBarSlice.ts";
import {useDispatch} from "react-redux";

interface AddOptionButtonProps {
    currentSearchOption: string | null;
    searchValue : string;
    setSearchValue : (searchValue: string) => void;
}


const AddOptionButton : React.FC<AddOptionButtonProps> = (props) =>{
    const dispatch = useDispatch();

    const handleAddSearchOption = () => {
        if (!props.currentSearchOption || !props.searchValue) return;

        // Update the Redux store based on the selected option
        switch (props.currentSearchOption.toLowerCase()) {
            case "phone":
                dispatch(setPhone(props.searchValue));
                break;
            case "email":
                dispatch(setEmail(props.searchValue));
                break;
            case "city":
                dispatch(setCity(props.searchValue));
                break;
            case "region":
                dispatch(setRegion(props.searchValue));
                break;
            case "post office":
                dispatch(setPostOffice(props.searchValue));
                break;
            default:
                break;
        }
        props.setSearchValue("");
    };

    return(
        <Button
            color="blue"
            disabled={!props.currentSearchOption || !props.searchValue}
            onClick={handleAddSearchOption}
        >Add search option
        </Button>
    )
}

export default AddOptionButton