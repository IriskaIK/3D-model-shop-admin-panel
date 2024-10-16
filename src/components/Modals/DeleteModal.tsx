import React from "react";
import {Button, Group, Modal, Space, Text} from "@mantine/core";

interface Props {
    opened : boolean,
    onClose : () => void,
    onDeleteClick : () => void,
    title : string,
    warningMessage : string,
}


const DeleteModal : React.FC<Props> = (props)  =>{
    return (
        <>
            <Modal opened={props.opened} onClose={props.onClose}
                   title={props.title}
                   centered>
                <Text tt="uppercase" size="lg">You sure you want to delete?</Text>
                <Text size="sm">{props.warningMessage}</Text>
                <Space h="xl"></Space>
                <Group>
                    <Button color="blue" onClick={props.onClose}>Cancel</Button>
                    <Button color="red" onClick={props.onDeleteClick}>Delete</Button>
                </Group>
            </Modal>
        </>
    )
}

export default DeleteModal;