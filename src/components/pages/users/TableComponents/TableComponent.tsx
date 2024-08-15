import React from "react";
import {Table} from "@mantine/core";
import TableItem from "./TableItem.tsx";
import {IUser} from "services/userService.ts";

interface TableComponentProps {
    tableItems : IUser[];
}


const TableComponent : React.FC<TableComponentProps> = (props) => {

    const rows = props.tableItems.map((element) => (
        <TableItem
            key={element.id}
            id={element.id}
            firstName={element.first_name}
            lastName={element.last_name ? element.last_name : '-'}
            email={element.email}
            role={element.type}
            isSelected={false}
        ></TableItem>
    ));

    return(
        <>
            <Table striped highlightOnHover>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>
                        </Table.Th>
                        <Table.Th>Id</Table.Th>
                        <Table.Th>First name</Table.Th>
                        <Table.Th>Last name</Table.Th>
                        <Table.Th>Email</Table.Th>
                        <Table.Th>Role</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    )
}

export default TableComponent;