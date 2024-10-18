import { PropsAPI } from "../type/typeAPI";

export const getProducts = async () => {

  try {
    const url: URL = new URL('http://192.168.1.245:3000/products');

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data: PropsAPI[] | undefined = await response.json();

    return data;

  } catch (error) {
    console.error('error :' , error);
  }

}



