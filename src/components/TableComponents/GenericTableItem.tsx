import { Group, Table} from "@mantine/core";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface TableItemProps<T> {
    item : T;
    seeDetails : (item : T) => void;
    fieldsToRender :  (keyof T)[];
}

const GenericTableItem = <T extends { id: number }>({item, seeDetails, fieldsToRender}:TableItemProps<T>) => {

    return (
        <Table.Tr key={item.id}>

            <Table.Td>
                <Group>

                    <div className="see-btn" onClick={() => {seeDetails(item)}}>
                        <FontAwesomeIcon icon={faEye} />
                    </div>

                </Group>

            </Table.Td>

            {
                fieldsToRender.map((key) => (
                    <Table.Td key={item[key] as string}>{item[key] ? item[key] as string : '-'}</Table.Td>
                ))
            }

        </Table.Tr>

    )
}

export default GenericTableItem;