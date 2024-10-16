import React from "react";
import {Table} from "@mantine/core";

import ProductTableItem from "pages/users/UserDetailsPage/ProductTableItem.tsx";
import {IProduct} from "services/productService";

interface TableComponentProps {
    tableItems : IProduct[];
}



const CartTable : React.FC<TableComponentProps> = (props) =>{
    return(
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Id</Table.Th>
                    <Table.Th>Title</Table.Th>
                    <Table.Th>Subtitle</Table.Th>
                    <Table.Th>Is in stock</Table.Th>
                    <Table.Th>Price</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{props.tableItems.map((product)=>{
                return <ProductTableItem key={product.id} {...product}/>
            })}</Table.Tbody>
        </Table>
    )
}
export default CartTable