import React, { createContext, PropsWithChildren, useContext, useState } from 'react'
import { SessionUser } from '../type/SessionUser';
import { DataUser } from '../type/DataUser';
import { SignIn, signInUser } from '../API/User/signInUser';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';


const AuthContextTag = createContext<SessionUser>({
    'isLoading': true,
    'user': null,
    'session': false,
    'image': null,
    signIn: () => null,
    signOut: () => null,
    pickImage: () => null
});

// This hook can be used to access the user info.
export function useSession() {
    const value = useContext(AuthContextTag);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}

export default function AuthContext({ children }: PropsWithChildren) {

    const [user, setUser] = useState<DataUser | null>(null);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [session, setSession] = useState<boolean>(false);

    const [image, setImage] = useState<any>(null);


    return (
        <AuthContextTag.Provider value={
            {
                'isLoading': isLoading,
                'session': session,
                'user': user,
                'image': image,
                signIn: async ({ email, password }: SignIn) => {

                    setIsLoading(true);

                    const dataUser: SignIn = {
                        'email': email,
                        'password': password
                    }

                    try {
                        const response = await signInUser(dataUser);

                        if (!response) {
                            throw new Error('Usuário não encontrado');
                        }

                        setImage(response.photo);

                        setUser(response);
                        setSession(true);
                        router.replace('/(tabs)/user/profile');

                    }
                    catch (error) {
                        console.error(error);
                    }
                    finally {

                        setIsLoading(false);
                    }
                },

                signOut: () => {
                    setSession(false);
                    setUser(null);
                    setImage(null);
                    router.push('/(tabs)/');
                },
                pickImage: async () => {
                    // No permissions request is necessary for launching the image library
                    let result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.All,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                    });

                    if (!result.canceled) {
                        setImage(result.assets[0].uri);
                    }
                }
            }

        }
        >
            {children}

        </AuthContextTag.Provider>
    )
}