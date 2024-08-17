import {Group, Table} from "@mantine/core";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface TableItemProps<T> {
    item: T;
    seeDetails: (item: T) => void;
    fieldsToRender: { path: string, multipleData?: boolean, relativePath?: string }[];
}

function getNestedValue<T>(obj: T, path: string): any {
    return path.split('.').reduce((acc: any, part: string) => {
        if (acc && typeof acc === 'object') {
            return acc[part];
        }
        return undefined;
    }, obj);
}

const GenericTableItem = <T extends { id: number }>({
                                                        item,
                                                        seeDetails,
                                                        fieldsToRender
                                                    }: TableItemProps<T>) => {

    return (
        <Table.Tr key={item.id}>

            <Table.Td>
                <Group>

                    <div className="see-btn" onClick={() => {
                        seeDetails(item)
                    }}>
                        <FontAwesomeIcon icon={faEye}/>
                    </div>

                </Group>

            </Table.Td>


            {
                fieldsToRender.map((field) => {

                    if (field.path) {
                        const content = getNestedValue(item, field.path)

                        if (field.multipleData && field.relativePath) {
                            const result: string = content.slice(0, 2).map((item: {
                                [x: string]: any;
                            }) => item[field.relativePath as string]).join(', ');
                            return <Table.Td key={content[0][field.relativePath]}>
                                {result}
                            </Table.Td>
                        }


                        if (typeof content === 'boolean') {
                            return <Table.Td key={String(content)}>{content ? '+' : '-'}</Table.Td>
                        }
                        return <Table.Td key={content}>{content ? content : '-'}</Table.Td>
                    }

                })
            }

        </Table.Tr>

    )
}

export default GenericTableItem;