import { PropsAPI } from "../type/typeAPI";

export const lastPage = (totalQuantityOfProducts: number, products: PropsAPI[]) => {

    const newProductsRender: PropsAPI[] = new Array();

    for (let index = totalQuantityOfProducts - 4; index < products.length; index++) {

        newProductsRender.push(products[index]);
    };

    return newProductsRender;
}

export const nextPage = (quantityOfProductsRender: number, products: PropsAPI[]) => {

    const newProductsRender: PropsAPI[] = new Array();

    for (let index = quantityOfProductsRender; index < quantityOfProductsRender + 4; index++) {

        if (index > products.length) {
            break;
        };

        newProductsRender.push(products[index]);

    };
    return newProductsRender;
};

export const previousPage = (quantityOfProductsRender: number, products: PropsAPI[]) => {

    const newProductsRender: PropsAPI[] = new Array();

    for (let index = quantityOfProductsRender - 8; index < quantityOfProductsRender - 4; index++) {

        if (index < 0) {
            break;
        };
        newProductsRender.push(products[index]);
    };

    return newProductsRender;
};

export const startPage = (products: PropsAPI[]) => {

    const newProductsRender: PropsAPI[] = products.filter((_, index) => index < 4);

    return newProductsRender;
};

