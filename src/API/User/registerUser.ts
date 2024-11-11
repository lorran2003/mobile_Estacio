import { DataUser } from "@/src/type/DataUser";

export interface TypeRegisterUser {
    'email': string;
    'password': string;
    'name': string;
    'phone': string;
    'cpf': string

}


export const registerUser = async (user: TypeRegisterUser) => {
    try {

        const url: URL = new URL('https://localhost:5001/api/User/create-user');

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "application/json" },
            
        });
        const data: string  = await response.json();
        return data
    }
    catch (e) {
        
        throw new Error("Algo deu errado");
        
    }
};
