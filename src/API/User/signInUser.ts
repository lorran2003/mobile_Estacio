import { DataUser } from "@/src/type/DataUser";

export interface SignIn {
    'email': string | null;
    'password': string | null;

}


export const signInUser = async (user: SignIn) => {
    try {

        const url: URL = new URL('https://localhost:5001/api/User/login');

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "application/json" },
            
        });
        const data: DataUser  = await response.json();
        console.log(data);
        return data
    }
    catch (e) {
        
        throw new Error("Algo deu errado");
        
    }
};
