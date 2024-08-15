import {Button} from "@mantine/core";
import React from "react";
import {toggleTheme} from "../../../store/theme/themeSlice.ts";
import {useAppDispatch} from "../../../store/hooks.ts";

const ChangeThemeButton: React.FC = () => {
    const dispatch = useAppDispatch();
    return(
        <Button onClick={() => dispatch(toggleTheme())}>
            Change theme
        </Button>

    )
}
export default ChangeThemeButton