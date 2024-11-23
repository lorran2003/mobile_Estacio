import { PropsAPI } from "../../type/typeAPI";

export let arrayFav: PropsAPI[] = new Array();

export const addProductsFavoriteList = async (product: PropsAPI | PropsAPI[]) => {
    try {

        const arrayProduct = Array.isArray(product) ? product : [product];

        arrayProduct.forEach((item) => {
            arrayFav.push(item);
        })

    }
    catch {

    }
};
