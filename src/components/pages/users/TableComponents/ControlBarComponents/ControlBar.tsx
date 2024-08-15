import React, {useState} from "react";
import {Autocomplete, Group, Select} from "@mantine/core";

import SearchOptionsTooltip from "./SearchOptionsTooltip.tsx";

import ResetButton from "components/pages/users/TableComponents/ControlBarComponents/Buttons/ResetButton.tsx";
import AddOptionButton from "components/pages/users/TableComponents/ControlBarComponents/Buttons/AddOptionButton.tsx";


const ControlBar: React.FC = () => {

    const [currentSearchOption, setCurrentSearchOption] = useState<string | null>(null)
    const [searchValue, setSearchValue] = useState<string>("");




    const handleOptionChange = (value: string | null) => {
        setCurrentSearchOption(value);
        setSearchValue("");
    }

    const handleSearchValueChange = (value: string) => {
        setSearchValue(value);
    };




    return (
        <Group align="flex-end" gap="md">
            <Select
                label="Search by"
                placeholder="Pick search options"
                value={currentSearchOption}
                onChange={handleOptionChange}
                data={[
                    { value: "Phone", label: "Phone" },
                    { value: "Email", label: "Email" },
                    { value: "City", label: "City" },
                    { value: "Region", label: "Region" },
                    { value: "Post office", label: "Post office" },
                ]}
            />
            <Autocomplete
                label="Search bar"
                placeholder="Input to search"
                value={searchValue}
                onChange={handleSearchValueChange}
                disabled={!currentSearchOption}
            ></Autocomplete>


            <AddOptionButton
                currentSearchOption={currentSearchOption}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            ></AddOptionButton>
            <ResetButton
                setSearchValue={setSearchValue}
            ></ResetButton>
            <SearchOptionsTooltip></SearchOptionsTooltip>

        </Group>
    )
}
export default ControlBar;