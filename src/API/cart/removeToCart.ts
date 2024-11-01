import { PropsAPI } from "../../type/typeAPI";
import { arrayCart } from "./addToCart";

export const removeToProduct = async ({ product }: { product: PropsAPI }) => {
    try {
        
        // const url: URL = new URL('http://192.168.1.245:3000/products');
    
        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: { "Content-type": "application/json" },
        // });
        // const data: PropsAPI[] | undefined = await response.json();
    
        // return data;

        arrayCart.forEach((item, index) => {
            item.id === product.id && arrayCart.splice(index,index + 1); 
        });
        return;
    }
    catch {

    }
};
