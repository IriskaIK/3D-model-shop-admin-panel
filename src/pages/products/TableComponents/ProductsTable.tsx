import React from "react";
import GenericTable from "components/TableComponents/GenericTable.tsx";
import {IProduct} from "services/productService.ts";
import ProductsTableItem from "pages/products/TableComponents/ProductsTableItem.tsx";

interface IProductTableTestProps {
    tableItems: IProduct[];
}


const ProductsTable: React.FC<IProductTableTestProps> = (props) => {

    return (
        <GenericTable
            tableItems={props.tableItems}
            columns={[
                {header: "Id", accessor: "id"},
                {header: "Title", accessor: "title"},
                {header: "Subtitle", accessor: "subtitle"},
                {header: "Category", accessor: "category"},
                {header: "Tags", accessor: "tags"},
                {header: "Price", accessor: 'price'},
                {header: "In stock", accessor: "isInStock"}
            ]}
            RowComponent={ProductsTableItem}
            fieldsToRender={[
                {path: "id"},
                {path: "title"},
                {path: "subtitle"},
                {path: "category.title"},
                {path : 'tags', multipleData : true, relativePath: "title"},
                {path: "price"},
                {path: "isInStock"}
            ]}

        />
    );
};

export default ProductsTable;
