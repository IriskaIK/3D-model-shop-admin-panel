import LogoutButton from "./LogoutButton.tsx";
import {Flex} from "@mantine/core";
import React from "react";
import ChangeThemeButton from "./ChangeThemeButton.tsx";

const NavbarControls: React.FC = () => {
    return (
        <Flex justify="center" align="center" gap="md">
            <ChangeThemeButton/>
            <LogoutButton/>
        </Flex>


    )
}

export default NavbarControls;