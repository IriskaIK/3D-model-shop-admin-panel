import React from "react";
import {Table} from "@mantine/core";
import {IOrder} from "services/userService.ts";
import OrdersTableItem from "pages/users/UserDetailsPage/OrdersTableItem.tsx";


interface TableComponentProps {
    tableItems : IOrder[];
}

const OrdersTable: React.FC<TableComponentProps> = (props) => {
    return(
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Order id</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Recipient details</Table.Th>
                    <Table.Th>Delivery address</Table.Th>
                    <Table.Th>Total price</Table.Th>
                    <Table.Th>Date</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{props.tableItems.map((order)=>{
                return <OrdersTableItem key={order.id} {...order}/>
            })}</Table.Tbody>
        </Table>
    )
}

export default OrdersTable;