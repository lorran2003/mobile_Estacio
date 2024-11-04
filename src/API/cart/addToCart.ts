import { PropsAPI } from '../../type/typeAPI';


export const arrayCart: PropsAPI[] = new Array();

export const addToCart = async (product: PropsAPI | PropsAPI[]) => {
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
            
            if (!arrayCart.some((product) => product.id === item.id)) {

                arrayCart.push(item);
            }
        })

    }
    catch {

    }
};