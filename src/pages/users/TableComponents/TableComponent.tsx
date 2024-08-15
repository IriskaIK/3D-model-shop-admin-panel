import React from "react";
import GenericTable from "components/TableComponents/GenericTable.tsx";
import {IUser} from "services/userService.ts";
import TableItem from "pages/users/TableComponents/TableItem.tsx";

interface IUserTableTestProps {
    tableItems: IUser[];
}



const UsersTableTest : React.FC<IUserTableTestProps> = (props) => {

    return (
        <GenericTable
            tableItems={props.tableItems}
            columns={[
                { header: "Id", accessor: "id" },
                { header: "First name", accessor: "first_name"},
                {header : "Last name", accessor : "last_name"},
                {header : "Email", accessor : 'email'},
                {header : "Role", accessor : "type"}
            ]}
            RowComponent={TableItem}
            fieldsToRender={['id', 'first_name', 'last_name', 'email', 'type']}

        />
    );
};

export default UsersTableTest;
