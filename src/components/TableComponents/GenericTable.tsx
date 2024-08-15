import { Table } from "@mantine/core";
import React from "react";

interface TableProps<T> {
    tableItems : T[];
    columns: Array<{ header: string; accessor: keyof T }>;
    fieldsToRender : (keyof T)[];
    RowComponent: React.FC<{ item: T; fieldsToRender : (keyof T)[];}>;


}
const GenericTable = <T extends { id: number }>({columns, tableItems, RowComponent, fieldsToRender }: TableProps<T>) => {
    return (
        <Table striped highlightOnHover>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    {columns.map((column) => (
                        <Table.Th key={column.accessor as string}>{column.header}</Table.Th>
                    ))}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {tableItems ? tableItems.map((item) => (
                    <RowComponent key={item.id} item={item} fieldsToRender={fieldsToRender} />
                )) : (<></>)}
            </Table.Tbody>
        </Table>
    );
};

export default GenericTable;
