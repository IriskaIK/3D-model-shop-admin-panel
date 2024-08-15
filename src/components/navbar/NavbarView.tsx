import React from "react";
import { Divider, Flex } from "@mantine/core";
import NavbarAccountDetails from "./NavbarAccountDetails.tsx";
import NavbarLinks from "./NavbarLinks.tsx";
import NavbarControls from "./controls/NavbarControls.tsx";


const NavbarView: React.FC = () => {
    return (
        <Flex direction="column" justify="space-between" h="100%">
            <div>
                <NavbarAccountDetails/>
                <Divider my="md"></Divider>
                <NavbarLinks/>
            </div>

            <NavbarControls/>
        </Flex>
    )
}

export default NavbarView;