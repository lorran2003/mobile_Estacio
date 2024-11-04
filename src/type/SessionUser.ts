import { SignIn } from "../API/User/signInUser";
import { DataUser } from "./DataUser";

export interface SessionUser {
    signIn: ({ email, password }: SignIn) => void;
    signOut: () => void;
    pickImage: () => void;
    takePicture: () => void;
    user: DataUser | null;
    session: boolean;
    isLoading: boolean;
    image: any;
}