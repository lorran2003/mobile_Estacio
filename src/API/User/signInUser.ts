import { DataUser } from "@/src/type/DataUser";

export interface SignIn {
    'email': string | null;
    'password': string | null;

}

const email = '123';
const password = '123';

const _user : DataUser = {
    'name': 'Lorran',
    'email': 'lorran@gmail.com',
}

export const signInUser = async (user: SignIn) => {
    try {

        // const url: URL = new URL('http://192.168.1.245:3000/products');

        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: { "Content-type": "application/json" },
        // });
        // const data: PropsAPI[] | undefined = await response.json();

        // return data;

        const inputEmail = user.email;
        const inputPassword = user.password;

        const response = email === inputEmail && password === inputPassword ? _user : false;

        return response;
    }
    catch {

    }
};
