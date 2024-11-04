import { lastPage, startPage } from "@/src/func/pagination";

const mockProducts = [
    {
        "id": "1",
        "name": "Vestido",
        "image": "https://dcdn.mitiendanube.com/stores/002/221/462/products/1-6203ac9d2855abb5c417237504267926-1024-1024.png",
        "price": "100.90"
    },
    {
        "id": "2",
        "name": "Blusa",
        "image": "https://lojamurau.vteximg.com.br/arquivos/ids/187143-1000-1000/Blusa-Off-White-M4112032-1.jpg?v=638255563877000000",
        "price": "32.70"
    },
    {
        "id": "3",
        "name": "Blusa com manga",
        "image": "https://seeder.cdn.magazord.com.br/img/2023/07/produto/3799/t-shirt-masculina-manga-longa-regular-fit-canelada-bege-se0701013-bg0029-3.jpg",
        "price": "45.90"
    },
    {
        "id": "4",
        "name": "Macacão Jeans",
        "image": "https://http2.mlstatic.com/D_NQ_NP_629218-MLB46276248131_062021-O.webp",
        "price": "300"
    },
    {
        "id": "5",
        "name": "Blusa com manga",
        "image": "https://seeder.cdn.magazord.com.br/img/2023/07/produto/3799/t-shirt-masculina-manga-longa-regular-fit-canelada-bege-se0701013-bg0029-3.jpg",
        "price": "45.90"
    },
    {
        "id": "6",
        "name": "Macacão Jeans",
        "image": "https://http2.mlstatic.com/D_NQ_NP_629218-MLB46276248131_062021-O.webp",
        "price": "300"
    }
];


test('Exibir os 4 primeiros produtos', () => {
    const result = startPage(mockProducts);
    expect(result).toEqual(
        [
            {
                "id": "1",
                "name": "Vestido",
                "image": "https://dcdn.mitiendanube.com/stores/002/221/462/products/1-6203ac9d2855abb5c417237504267926-1024-1024.png",
                "price": "100.90"
            },
            {
                "id": "2",
                "name": "Blusa",
                "image": "https://lojamurau.vteximg.com.br/arquivos/ids/187143-1000-1000/Blusa-Off-White-M4112032-1.jpg?v=638255563877000000",
                "price": "32.70"
            },
            {
                "id": "3",
                "name": "Blusa com manga",
                "image": "https://seeder.cdn.magazord.com.br/img/2023/07/produto/3799/t-shirt-masculina-manga-longa-regular-fit-canelada-bege-se0701013-bg0029-3.jpg",
                "price": "45.90"
            },
            {
                "id": "4",
                "name": "Macacão Jeans",
                "image": "https://http2.mlstatic.com/D_NQ_NP_629218-MLB46276248131_062021-O.webp",
                "price": "300"
            }
        ]
    );
});

test('Exibir os 4 ultimos produtos', () => {
    const result = lastPage(mockProducts.length ,mockProducts);
    expect(result).toEqual(
        [
            {
                "id": "3",
                "name": "Blusa com manga",
                "image": "https://seeder.cdn.magazord.com.br/img/2023/07/produto/3799/t-shirt-masculina-manga-longa-regular-fit-canelada-bege-se0701013-bg0029-3.jpg",
                "price": "45.90"
            },
            {
                "id": "4",
                "name": "Macacão Jeans",
                "image": "https://http2.mlstatic.com/D_NQ_NP_629218-MLB46276248131_062021-O.webp",
                "price": "300"
            },
            {
                "id": "5",
                "name": "Blusa com manga",
                "image": "https://seeder.cdn.magazord.com.br/img/2023/07/produto/3799/t-shirt-masculina-manga-longa-regular-fit-canelada-bege-se0701013-bg0029-3.jpg",
                "price": "45.90"
            },
            {
                "id": "6",
                "name": "Macacão Jeans",
                "image": "https://http2.mlstatic.com/D_NQ_NP_629218-MLB46276248131_062021-O.webp",
                "price": "300"
            },
        ]
    );
});