import { PropsAPI } from '../../type/typeAPI';


export const arrayCart: PropsAPI[] = new Array();

export const addToCart = async ({ product }: { product: PropsAPI | PropsAPI[] }) => {
    try {

        // const url: URL = new URL('http://192.168.1.245:3000/products');

        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: { "Content-type": "application/json" },
        // });
        // const data: PropsAPI[] | undefined = await response.json();

        // return data;

        if (product instanceof Array) {

            product.forEach((item) => {
                arrayCart.push(item);
            });

            return;
        }

        arrayCart.push(product);
        
    }
    catch {

    }
};