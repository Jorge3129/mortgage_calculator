import {useAuthContext} from "./AuthContext";
import {Dispatch, MouseEvent, SetStateAction, useEffect} from "react";
import AuthAPI from "./auth.api";
import {PartialUser} from "../../types/types";

export const useLogout = () => {
    const {setUser} = useAuthContext();

    return (e: MouseEvent<HTMLElement>) => {
        if (setUser) setUser(undefined);
        localStorage.removeItem('user');
    };
}

export const useFetchUser = (setUser: Dispatch<SetStateAction<PartialUser | undefined>>) => {

    const getUser = async () => {
        const userId = localStorage.getItem('user');
        if (!userId || !parseInt(userId)) return;
        const res = await AuthAPI.getUserById(parseInt(userId));
        if (!res?.data.success) return;
        if (setUser) setUser(res.data.user);
    }

    useEffect(() => {
        (async () => getUser())();
    }, [])
}
