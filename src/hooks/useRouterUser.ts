import { useEffect, useState } from "react";
import { Href } from "expo-router";
import { useSession } from "../components/AuthContext";

export function useRouterUser() {
    const [routerUser, setRouterUser] = useState<Href>('/user/login');
    const { session } = useSession();

    useEffect(() => {
        if (session) {
            setRouterUser('/user/profile');
        } else {
            setRouterUser('/user/login');
        }
    }, [session]);

    return routerUser;
}