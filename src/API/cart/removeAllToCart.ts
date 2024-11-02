import { PropsAPI } from "../../type/typeAPI";
import { arrayCart } from "./addToCart";

export const removeAllToCart = async (product: PropsAPI | PropsAPI[]) => {
    try {

        // const url: URL = new URL('http://192.168.1.245:3000/products');

        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: { "Content-type": "application/json" },
        // });
        // const data: PropsAPI[] | undefined = await response.json();

        // return data;

        const arrayProduct = Array.isArray(product) ? product : [product];


        const arrayRemove = arrayCart
            .filter((item) => arrayProduct
                .some((product) => product.id === item.id));

        for (let i = arrayCart.length - 1; i >= 0; i--) {
            if (arrayRemove.some((product) => arrayCart[i].id === product.id)) {
                arrayCart.splice(i, 1);  // Remove o item de arrayFav no índice atual
            }
        }
    }
    catch {

    }
};
