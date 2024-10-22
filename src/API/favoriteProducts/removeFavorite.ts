import { PropsAPI } from "../../type/typeAPI";
import { arrayFav } from "./addFavorite";

export const removeProductsFavoriteList = async ({ product }: { product: PropsAPI }) => {
    try {
        
        // const url: URL = new URL('http://192.168.1.245:3000/products');
    
        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: { "Content-type": "application/json" },
        // });
        // const data: PropsAPI[] | undefined = await response.json();
    
        // return data;

        arrayFav.forEach((item, index) => {
            item.id === product.id ? arrayFav.splice(index) : null ; 
        });
        console.log(arrayFav);
        return;
    }
    catch {

    }
};
