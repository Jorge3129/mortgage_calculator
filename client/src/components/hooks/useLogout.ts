import {useAuthContext} from "../../pages/auth/AuthContext";
import {Dispatch, MouseEvent, SetStateAction, useEffect} from "react";
import AuthAPI from "../../pages/auth/auth.api";
import {PartialUser} from "../../types/types";
import {useDispatch} from "react-redux";
import {setUserId} from "../../pages/banks/utils/banks.reducer";

export const useLogout = () => {
    const {setUser} = useAuthContext();

    return (e: MouseEvent<HTMLElement>) => {
        if (setUser) setUser(undefined);
        localStorage.removeItem('user');
    };
}

export const useLogin = (setUser: Dispatch<SetStateAction<PartialUser | undefined>>) => {

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
