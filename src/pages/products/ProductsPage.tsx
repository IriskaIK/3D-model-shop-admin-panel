import React, {useEffect} from "react";
import {Divider} from "@mantine/core";
import ProductsControlBar from "pages/products/TableComponents/ProductsControlBar.tsx";
import ProductsTable from "pages/products/TableComponents/ProductsTable.tsx";

import {useAppDispatch, useAppSelector} from "store/hooks.ts";
import {RootState} from "store/store.ts";
import {fetchProducts} from "services/productService.ts";
import {setProducts} from "store/productsTable/productsTableSlice.ts";

const ProductsPage : React.FC = () => {
    const dispatch = useAppDispatch();

    const searchBar = useAppSelector((state: RootState ) => state.productsSearchBar);

    const products = useAppSelector((state : RootState) => state.productsTable.products)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts(searchBar);
                dispatch(setProducts(data.products));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getProducts();
    }, [searchBar]);
    return (
        <>
            <ProductsControlBar></ProductsControlBar>
            <Divider my="md" />

            <ProductsTable tableItems={products}></ProductsTable>
        </>
    )
}

export default ProductsPage