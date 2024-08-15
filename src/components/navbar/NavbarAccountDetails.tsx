import React from "react";
import {Avatar, Group} from "@mantine/core";

const NavbarAccountDetails : React.FC = ()=>{
    return (
        <Group>
            <Avatar
                size="40"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg"/>
            Hi, Name Somebody!

        </Group>
    )
}

export default NavbarAccountDetails;