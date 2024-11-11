export interface PropsAPI{
    id:string;
    description: string;
    stock: number;
    images:Images[]
    name:string;
    price:number;
}

interface Images {
    id: string;
    productId: string;
    imagePath: string;
}