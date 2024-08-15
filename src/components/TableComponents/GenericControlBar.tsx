import React, {SetStateAction, useState} from "react";
import {Autocomplete, Group, Select} from "@mantine/core";
import SearchOptionsTooltip from "components/TableComponents/SearchOptionsTooltip.tsx";
import ResetButton from "components/Buttons/ResetButton.tsx";
import AddOptionButton from "components/Buttons/AddOptionButton.tsx";


interface GenericControlBarProps<T> {
    handleReset: (setSearchValue: React.Dispatch<SetStateAction<string>>) => void;
    handleAddOption: (currentSearchOption: (string | null),
                      searchValue: string,
                      setSearchValue: React.Dispatch<SetStateAction<string>>) => void;
    state: T;
    searchOptions: { value: string, label: string }[];
}


const GenericControlBar = <T extends {}>({
                                             handleAddOption,
                                             handleReset,
                                             state,
                                             searchOptions
                                         }: GenericControlBarProps<T>) => {

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
                data={searchOptions}
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
                handleAddOption={() => {
                    handleAddOption(currentSearchOption, searchValue, setSearchValue)
                }}
            ></AddOptionButton>
            <ResetButton
                handleReset={() => {
                    handleReset(setSearchValue)
                }}
                state={state}
            ></ResetButton>
            <SearchOptionsTooltip
                state={state}
            ></SearchOptionsTooltip>

        </Group>
    )
}
export default GenericControlBar;