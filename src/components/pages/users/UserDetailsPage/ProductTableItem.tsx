
import React from 'react';
import {Group, Table} from "@mantine/core";
import {IProduct} from "services/userService.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";


const ProductTableItem: React.FC<IProduct> = (props) => {
    return (
        <Table.Tr key={props.id}>
            <Table.Td>
                <Group>
                    <div className="see-btn">
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </Group>
            </Table.Td>
            <Table.Td>{props.id}</Table.Td>
            <Table.Td>{props.title}</Table.Td>
            <Table.Td>{props.subtitle}</Table.Td>
            <Table.Td>{props.isInStock ? "Yes" : "No"}</Table.Td>
            <Table.Td>{props.price} {props.currency}</Table.Td>
        </Table.Tr>
    )
}

export default ProductTableItem;