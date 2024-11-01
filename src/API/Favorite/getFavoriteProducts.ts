import { PropsAPI } from "@/src/type/typeAPI";
import { arrayFav } from "./addFromFavorite";


export const getFavoriteProducts = async () => {

  try {
    const url: URL = new URL('http://192.168.1.245:3000/products');
        
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    
    const data: PropsAPI[] = await response.json();

    return arrayFav;

  } catch (error) {

    console.error('error :' , error);
    return false ;
  
  }

}



