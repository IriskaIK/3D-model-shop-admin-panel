
import React from 'react';
import {Group, Table} from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {fetchProductById, IProduct} from "services/productService";
import {useNavigate} from "react-router-dom";


const ProductTableItem: React.FC<IProduct> = (props) => {
    const navigate = useNavigate();
    function seeDetails(item: IProduct) {
        const getUserById = async () => {
            try {
                const data: IProduct = await fetchProductById(item.id);
                console.log(data);
                navigate(`/products/${item.id}`, {state: {product: data}})
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
                    <div className="see-btn">
                        <FontAwesomeIcon onClick={() => seeDetails(props)} icon={faEye} />
                    </div>
                </Group>
            </Table.Td>
            <Table.Td>{props.id}</Table.Td>
            <Table.Td>{props.title}</Table.Td>
            <Table.Td>{props.subtitle}</Table.Td>
            <Table.Td>{props.isInStock ? "Yes" : "No"}</Table.Td>
            <Table.Td>{props.price} {props.currency}</Table.Td>
        </Table.Tr>
    )
}

export default ProductTableItem;