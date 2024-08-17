import React from "react";
import GenericTableItem from "components/TableComponents/GenericTableItem.tsx";
import {fetchUserById, IDetailedUser, IUser} from "services/userService.ts";
import {useNavigate} from "react-router-dom";

interface TableItemTestProps {
    item: IUser,
    fieldsToRender: {path : string}[];
}

const UsersTableItem: React.FC<TableItemTestProps> = ({item, fieldsToRender}) => {
    const navigate = useNavigate();

    function seeDetails(item: IUser) {
        const getUserById = async () => {
            try {
                const data: IDetailedUser = await fetchUserById(item.id);
                console.log(data);
                navigate(`${item.id}`, {state: {user: data}})
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUserById();

    }

    return (
        <GenericTableItem item={item} seeDetails={seeDetails} fieldsToRender={fieldsToRender}>

        </GenericTableItem>
    )
}

export default UsersTableItem;