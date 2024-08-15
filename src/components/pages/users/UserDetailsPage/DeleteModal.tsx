import React from "react";
import {Button, Group, Modal, Space, Text} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {fetchDeleteUserById} from "services/userService.ts";

interface DeleteModalProps {
    userId: number,
    first_name: string,
    last_name: string,
    opened: boolean,
    onClose: () => void,
}

const DeleteModal: React.FC<DeleteModalProps> = (props) => {
    const navigate = useNavigate();
    function onDeleteClick(){

        const deleteUserById = async () => {
            try {
                await fetchDeleteUserById(props.userId);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        deleteUserById();
        props.onClose();
        navigate('/users')
    }

    return (
        <Modal opened={props.opened} onClose={props.onClose}
               title={`Delete user ${props.first_name} ${props.last_name} #${props.userId}`}
               centered>
            <Text tt="uppercase" size="lg">You sure you want to delete?</Text>
            <Text size="sm">This action will remove all records about user</Text>
            <Space h="xl"></Space>
            <Group>
                <Button color="blue" onClick={props.onClose}>Cancel</Button>
                <Button color="red" onClick={onDeleteClick}>Delete</Button>
            </Group>
        </Modal>
    )
}

export default DeleteModal;