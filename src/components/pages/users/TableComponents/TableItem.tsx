import React from "react";
import { Group, Table} from "@mantine/core";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './styles.css'
import {useNavigate} from "react-router-dom";
import {fetchUserById, IDetailedUser} from "services/userService.ts";

interface TableItemProps {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    isSelected: boolean,
}

const TableItem: React.FC<TableItemProps> = (props) => {
    const navigate = useNavigate();
    function seeDetails(){
        const getUserById = async () => {
            try {
                const data : IDetailedUser = await fetchUserById(props.id);
                console.log(data);
                navigate(`${props.id}`, {state : { user : data}})
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUserById();

    }


    return (
        <Table.Tr key={props.id}>

            <Table.Td>
                <Group>

                    <div className="see-btn" onClick={seeDetails}>
                        <FontAwesomeIcon icon={faEye} />
                    </div>

                </Group>

            </Table.Td>


            <Table.Td>{props.id}</Table.Td>
            <Table.Td>{props.firstName}</Table.Td>
            <Table.Td>{props.lastName}</Table.Td>
            <Table.Td>{props.email}</Table.Td>
            <Table.Td>{props.role}</Table.Td>
        </Table.Tr>

    )
}

export default TableItem;