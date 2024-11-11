import { PropsAPI } from "../type/typeAPI";

export const getProducts = async () => {

  try {
    const url: URL = new URL(`https://localhost:5001/api/Product/get-all-products`);
        
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    
    const data: PropsAPI[] = await response.json();
    return data;

  } catch (error) {

    console.error('error :' , error);
    return false ;
  
  }

}



