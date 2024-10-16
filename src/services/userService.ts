import {UsersSearchBarState} from "store/usersSearchBar/usersSearchBarSlice.ts";
import {IProduct} from "services/productService.ts";

export interface IShippingAddress{
    id: number;
    region: {
        name : string,
        id : number
    };
    city: {
        name : string,
        id : number
    };
    postOffice: {
        address : string,
        id : number
    };
}
export interface IUser {
    type: string;
    id: number;
    first_name: string;
    email: string;
    last_name: string | null;
    phone: string | null;
    shipping_address: IShippingAddress;
    created_at: string;
    updated_at: string;
}
// export interface IProduct {
//     id: number,
//     slug: string,
//     title: string,
//     subtitle: string,
//     content: string,
//     price: number,
//     currency: string,
//     isInStock: boolean,
//     category_id: number,
//     created_at: string,
//     updated_at: string
// }
export interface IOrderItem {
    id : number,
    title : string,
    subtitle : string,
    price : number,
    currency: string,
    product_id : number
}
export interface IRecipient {
    id: number,
    first_name: string,
    last_name: string,
    phone: string,
    created_at: string,
    updated_at: string
}

interface IRecipientAddress extends IShippingAddress {
    address: string;
}


export interface IOrder {
    id : number,
    status : string,
    created_at : string,
    updated_at: string,
    recipient_id: number,
    shipping_address_id : number,
    user_id : number,
    orderItems :IOrderItem[],
    recipient : IRecipient,
    recipient_address : IRecipientAddress,
    total_price : number,
    delivery_price : number,
}
export interface IDetailedUser extends IUser{
    wishlist : IProduct[],
    orders : IOrder[],
    cart : IProduct[]
}
export interface IUsersResponse{
    offset : number,
    users : Array<IUser>
}
export const fetchUsers = async (state : UsersSearchBarState): Promise<IUsersResponse> => {
    const body: Record<string, string> = {};

    if (state.phone) body.phoneNumber = state.phone;
    if (state.email) body.email = state.email;
    if (state.city) body.city = state.city;
    if (state.region) body.region = state.region;
    if (state.postOffice) body.postOffice = state.postOffice;




    try {
        const response = await fetch("http://localhost:3000/api/admin/users/", {
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
};

export const fetchUserById = async (id: number): Promise<IDetailedUser> => {
    try {
        const response = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
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

export const fetchDeleteUserById = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`http://localhost:3000/api/admin/users/user/remove/${id}`, {
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