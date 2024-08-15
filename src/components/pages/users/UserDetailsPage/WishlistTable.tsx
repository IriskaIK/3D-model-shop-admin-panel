import React from "react";
import {Table} from "@mantine/core";
import {IProduct} from "services/userService.ts";
import ProductTableItem from "components/pages/users/UserDetailsPage/ProductTableItem.tsx";

interface TableComponentProps {
    tableItems : IProduct[];
}



const WishlistTable : React.FC<TableComponentProps> = (props) =>{
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
export default WishlistTable