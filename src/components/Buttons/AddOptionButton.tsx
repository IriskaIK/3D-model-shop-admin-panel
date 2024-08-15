import React from "react";
import {Button} from "@mantine/core";

interface AddOptionButtonProps {
    currentSearchOption: string | null;
    searchValue : string;
    handleAddOption : () => void;
}


const AddOptionButton : React.FC<AddOptionButtonProps> = (props) =>{

    return(
        <Button
            color="blue"
            disabled={!props.currentSearchOption || !props.searchValue}
            onClick={props.handleAddOption}
        >Add search option
        </Button>
    )
}

export default AddOptionButton