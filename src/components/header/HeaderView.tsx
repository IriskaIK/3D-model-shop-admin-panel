import React from "react";
import {Burger, Flex, Group, Text} from "@mantine/core";
import {toggleNavbar} from "../../store/navbar/navbarSlice.ts";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {RootState} from "../../store/store.ts";

import './styles.css'
import HeaderSocialLinks from "./HeaderSocialLinks.tsx";


const HeaderView : React.FC = () => {
    const dispatch = useAppDispatch();
    const isNavbarOpened = useAppSelector((state: RootState) => state.navbar.isOpened)

    return(
        <>
            <Flex justify="space-between" align="center" mr="md" ml="md" h="100%">
                <Group px="md" h="100%">
                    <Burger
                        opened={isNavbarOpened}
                        onClick={() => dispatch(toggleNavbar())}
                        size="sm"
                    />
                    <HeaderSocialLinks></HeaderSocialLinks>


                </Group>


                <Text fz="lg">CMS for 3D-model shop</Text>
            </Flex>

        </>
    )
}

export default HeaderView;