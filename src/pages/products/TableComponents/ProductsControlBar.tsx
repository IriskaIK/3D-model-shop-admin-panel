import React, {SetStateAction} from "react";

import {useAppSelector} from "store/hooks.ts";
import {RootState} from "store/store.ts";
import {useDispatch} from "react-redux";

import GenericControlBar from "components/TableComponents/GenericControlBar.tsx";
import {setTagTitle, reset, setMaxPrice, setMinPrice} from "store/productsSearchBar/productsSearchBarSlice.ts";


const ProductsControlBar: React.FC = () => {


    const state = useAppSelector((state: RootState) => state.productsSearchBar);
    const dispatch = useDispatch();

    const handleReset = (setSearchValue: React.Dispatch<SetStateAction<string>>) => {
        setSearchValue("");
        dispatch(reset())
    }

    const handleAddOption = (currentSearchOption: (string | null),
                             searchValue: string,
                             setSearchValue: React.Dispatch<SetStateAction<string>>) => {
        if (!currentSearchOption || !searchValue) return;

        switch (currentSearchOption.toLowerCase()) {
            case "tag":
                dispatch(setTagTitle(searchValue));
                break;
            case "maxprice":
                dispatch(setMaxPrice(searchValue));
                break;
            case "minprice":
                dispatch(setMinPrice(searchValue));
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
                {value: "Title", label: "Title"},
                {value: "InStock", label: "In stock"},
                {value: "Category", label: "Category"},
                {value: "Tag", label: "Tag"},
                {value: "MaxPrice", label: "Max price"},
                {value: "MinPrice", label: "Min price"},

            ]}>

        </GenericControlBar>
    )
}
export default ProductsControlBar;