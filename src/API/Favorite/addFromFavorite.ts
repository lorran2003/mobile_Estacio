import { PropsAPI } from "../../type/typeAPI";

export let arrayFav: PropsAPI[] = new Array();

export const addProductsFavoriteList = async (product: PropsAPI | PropsAPI[]) => {
    try {

        // const url: URL = new URL('http://192.168.1.245:3000/products');

        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: { "Content-type": "application/json" },
        // });
        // const data: PropsAPI[] | undefined = await response.json();

        // return data;

        const arrayProduct = Array.isArray(product) ? product : [product];

        arrayProduct.forEach((item) => {
            arrayFav.push(item);
        })

    }
    catch {

    }
};
