import React from 'react';
import {Badge, Group, Table, Tooltip} from "@mantine/core";
import {IOrder} from "services/userService.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

function formatDate(dateString: string) {
    // Parse the date string
    const date = new Date(dateString);

    // Extract day, month, year, hours, and minutes
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Format into dd.mm.yyyy hh:mm
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

const OrdersTableItem: React.FC<IOrder> = (props) => {
    return (
        <Table.Tr key={props.id}>
            <Table.Td>
                <Group>
                    <div className="see-btn">
                        <FontAwesomeIcon icon={faEye}/>
                    </div>
                </Group>
            </Table.Td>
            <Table.Td>{props.id}</Table.Td>
            <Table.Td>In progress</Table.Td>

            <Table.Td>
                <Tooltip label={`${props.recipient.first_name} ${props.recipient.last_name ? props.recipient.last_name : ''}, +38 ${props.recipient.phone}`}>
                    <Badge>
                        see more
                    </Badge>
                </Tooltip>
            </Table.Td>


            <Table.Td>
                {props.recipient_address.address}
            </Table.Td>

            <Table.Td>{props.total_price}$</Table.Td>
            <Table.Td>{formatDate(props.created_at)}</Table.Td>
        </Table.Tr>
    )
}

export default OrdersTableItem