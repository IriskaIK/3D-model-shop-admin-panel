import React from "react";
import GenericTable from "components/TableComponents/GenericTable.tsx";
import {IUser} from "services/userService.ts";
import UsersTableItem from "pages/users/TableComponents/UsersTableItem.tsx";

interface IUserTableTestProps {
    tableItems: IUser[];
}



const UsersTable: React.FC<IUserTableTestProps> = (props) => {

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
            RowComponent={UsersTableItem}
            fieldsToRender={[
                {path: "id"},
                {path: "first_name"},
                {path: "last_name"},
                {path: "email"},
                {path: "type"},
            ]}

        />
    );
};

export default UsersTable;
