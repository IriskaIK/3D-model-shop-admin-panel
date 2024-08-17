import {ProductsSearchBarState} from "store/productsSearchBar/productsSearchBarSlice.ts";

export interface IProduct{
    id: number;
    slug: string;
    title : string;
    subtitle : string;
    content : string;
    price : number;
    currency: string;
    isInStock: boolean;

    category : ICategory;
    tags : ITag[];
    images : IImage[];

    created_at: string;
    updated_at: string;
}
export interface ICategory {
    id: number;
    title : string;
    content : string;

    image: IImage;

    created_at : string;
    updated_at: string;
}
export interface ITag {
    id: number;
    title : string;
    created_at : string;
    updated_at: string;
}
export interface IImage{
    id: number;
    filename: string;
    path: string;
}

export interface IManyProductsResponse{
    offset : number;
    products : IProduct[];
}
interface Body{
    offset : undefined | number;
    inStock : undefined | boolean;
    category : undefined | number[];
    tags : undefined | number[],
    price : {
        min : undefined | string,
        max : undefined | string,
    }
}
export const fetchProducts = async (state : ProductsSearchBarState) : Promise<IManyProductsResponse> => {
    const body : Body = {
        offset : undefined,
        inStock : undefined,
        category : undefined,
        tags : undefined,
        price : {
            min : undefined,
            max : undefined,
        }
    };

    if (state.offset) body.offset = state.offset;
    if (state.inStock) body.inStock = state.inStock;
    if (state.category) body.category = state.category;
    // if (state.tags) body.tags = state.tags;
    if (state.maxPrice) body.price.max = state.maxPrice;
    if(state.minPrice) body.price.min = state.minPrice;

    try {
        const response = await fetch("http://localhost:3000/api/admin/products/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
    }

}

export const fetchProductById = async (id: number) : Promise<IProduct> => {
    try {
        const response = await fetch(`http://localhost:3000/api/admin/products/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }catch (e){
        console.error(e);
        throw e;
    }
}

export const deleteProductById = async (id: number) : Promise<void> => {
    try {
        const response = await fetch(`http://localhost:3000/api/admin/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }catch (e){
        console.error(e);
        throw e;
    }
}

// export const updateProductById = async (id: number) => {
//
// }