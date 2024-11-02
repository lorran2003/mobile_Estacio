import { PropsAPI } from "../../type/typeAPI";
import { arrayFav } from "./addFromFavorite";

export const removeProductsFavoriteList = async (product: PropsAPI | PropsAPI[]) => {
    try {

        // const url: URL = new URL('http://192.168.1.245:3000/products');

        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: { "Content-type": "application/json" },
        // });
        // const data: PropsAPI[] | undefined = await response.json();

        // return data;

        const arrayProduct = Array.isArray(product) ? product : [product];

        const arrayRemove = arrayFav
            .filter((item) => arrayProduct
                .some((product) => product.id === item.id));

        for (let i = arrayFav.length - 1; i >= 0; i--) {
            if (arrayRemove.some((product) => arrayFav[i].id === product.id)) {
                arrayFav.splice(i, 1);  // Remove o item de arrayFav no índice atual
            }
        }
    }
    catch {

    }
};
