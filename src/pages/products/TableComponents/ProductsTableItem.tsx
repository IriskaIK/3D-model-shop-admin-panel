import React from "react";
import GenericTableItem from "components/TableComponents/GenericTableItem.tsx";
import {fetchUserById, IDetailedUser} from "services/userService.ts";
import {IProduct} from "services/productService.ts";
import {useNavigate} from "react-router-dom";

interface TableItemTestProps {
    item: IProduct,
    fieldsToRender : {path : string, multipleData?: boolean, relativePath?: string}[];
}

const ProductsTableItem: React.FC<TableItemTestProps> = ({item, fieldsToRender}) => {
    const navigate = useNavigate();

    function seeDetails(item: IProduct) {
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

export default ProductsTableItem;