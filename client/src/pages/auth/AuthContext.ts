import {createContext, Dispatch, SetStateAction, useContext} from "react";
import {PartialUser} from "../../types/types";

export type IAuthContext = {
    user?: PartialUser;
    setUser?: Dispatch<SetStateAction<PartialUser | undefined>>
};

const initState: IAuthContext = {};

export const AuthContext = createContext<IAuthContext>(initState);

export const useAuthContext = () => useContext(AuthContext);
