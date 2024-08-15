import React from "react";
import {Chip, Tooltip} from "@mantine/core";
import {useAppSelector} from "store/hooks.ts";
import {RootState} from "store/store.ts";




const SearchOptionsTooltip: React.FC = () => {

    const state = useAppSelector((state: RootState) => state.usersSearchBar);


    const renderTooltipContent = () => {
        if (Object.entries(state)
            .filter(([_key, value]) => value !== null)
            .length === 0) {
            return (
                <div>
                    Nothing selected
                </div>
            );
        }
        return (
            <div>
                {
                    Object.entries(state)
                        .filter(([_key, value]) => value !== null)
                        .map(([key, value]) => (
                            <div key={key}>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </div>
                        ))
                }
            </div>
        );
    };


    return (
        <Tooltip label={renderTooltipContent()} refProp="rootRef" position="bottom" withArrow>
            <Chip checked={false}>Selected options</Chip>
        </Tooltip>
    )
}

export default SearchOptionsTooltip