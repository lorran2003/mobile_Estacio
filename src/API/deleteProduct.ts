import { PropsAPI } from "../type/typeAPI";
import { arrayFav } from "./postProduct";

export const removeProductsFavoriteList = async ({ product }: { product: PropsAPI }) => {
    try {
        
        // const url: URL = new URL('http://192.168.1.245:3000/products');
    
        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: { "Content-type": "application/json" },
        // });
        // const data: PropsAPI[] | undefined = await response.json();
    
        // return data;

        arrayFav.slice();
        return;
    }
    catch {

    }
};
