import React from "react";
import {Group, NavLink, Text} from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxesPacking, faBoxesStacked, faChartPie, faUsers} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from "react-router-dom";

const NavbarLinks : React.FC = () => {
    const location = useLocation();

    console.log(location.pathname);
    return (
        <Group>

            <NavLink
                active={location.pathname === '/statistics'}
                component={Link}
                to={'/statistics'}
                label={
                    <Text fz="lg">
                        Statistics
                    </Text>
                }
                fz="lg"
                leftSection={<FontAwesomeIcon icon={faChartPie}/>}
            />
            <NavLink
                active={location.pathname === '/products'}
                component={Link}
                to={'/products'}
                label={
                    <Text fz="lg">
                        Products
                    </Text>
                }
                fz="lg"
                leftSection={<FontAwesomeIcon icon={faBoxesStacked}/>}
            />
            <NavLink
                active={location.pathname === '/orders'}
                component={Link}
                to={'/orders'}
                label={
                    <Text fz="lg">
                        Orders
                    </Text>
                }
                fz="lg"
                leftSection={<FontAwesomeIcon icon={faBoxesPacking}/>}
            />

            <NavLink
                active={location.pathname === '/users'}
                component={Link}
                to={'/users'}
                label={
                    <Text fz="lg">
                        Users
                    </Text>
                }
                fz="lg"
                leftSection={<FontAwesomeIcon icon={faUsers}/>}
            />
        </Group>
    )
}
export default NavbarLinks;