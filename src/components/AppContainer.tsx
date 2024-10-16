import {AppShell} from '@mantine/core';

import React from "react";

import NavbarView from "./navbar/NavbarView.tsx";
import HeaderView from "./header/HeaderView.tsx";
import {useAppSelector} from "store/hooks";
import {RootState} from "store/store";
import { Route, Routes, Navigate} from "react-router-dom";
import StatisticPage from "../pages/statistic/StatisticPage.tsx";
import ProductsPage from "../pages/products/ProductsPage.tsx";
import OrdersPage from "../pages/orders/OrdersPage.tsx";
import UsersPage from "../pages/users/UsersPage.tsx";
import DefaultPage from "../pages/default/DefaultPage.tsx";
import UserDetailsPage from "../pages/users/UserDetailsPage/UserDetailsPage.tsx";
import ProductDetailsPage from "pages/products/ProductDetailsPage/ProductDetailsPage";

const AppContainer: React.FC = () => {
    const isNavbarOpened = useAppSelector((state: RootState) => state.navbar.isOpened)
    return (
        <AppShell
            header={{height: 60}}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: {mobile: !isNavbarOpened, desktop: !isNavbarOpened},
            }}
            padding="md"
        >
            <AppShell.Header>

                <HeaderView/>

            </AppShell.Header>

            <AppShell.Navbar p="md">
                <NavbarView/>
            </AppShell.Navbar>

            <AppShell.Main>

                <Routes>
                    <Route path="/statistics" element={<StatisticPage/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/orders" element={<OrdersPage/>}/>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/users/:id" element={<UserDetailsPage/>}/>
                    <Route path={"/products/:id"} element={<ProductDetailsPage/>}></Route>
                    <Route path="/" element={<DefaultPage/>}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

            </AppShell.Main>
        </AppShell>
    )

}


export default AppContainer;