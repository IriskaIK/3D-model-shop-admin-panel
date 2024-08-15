import {Chip, Tooltip} from "@mantine/core";

interface SearchOptionsTooltipProps<T> {
    state : T;
}


const SearchOptionsTooltip = <T extends {}>({state}: SearchOptionsTooltipProps<T>) => {

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
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value as string}
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