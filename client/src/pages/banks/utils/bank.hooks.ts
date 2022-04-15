import {useDispatch, useSelector} from "react-redux";
import {selectBanks, setBankAction, setUserId} from "./banks.reducer";
import {bankThunk} from "./bank.thunk";
import {MouseEvent, useEffect} from "react";
import {useAuthContext} from "../../auth/AuthContext";
import {Bank} from "../../../types/types";

export const useFetchBanks = () => {
    const {banks, userId} = useSelector(selectBanks);
    const dispatch = useDispatch();
    const {user} = useAuthContext();

    useEffect(() => {
        if (!user) return;
        if (banks.length && userId === user.userId) return; // avoid reload
        const id = user.userId
        dispatch(bankThunk(id));
        dispatch(setUserId(id))
    }, [user]);
}

export const useBankActions = ({bankId}: Bank) => {
    const dispatch = useDispatch();

    const onDeleteBank = (e: MouseEvent<HTMLLIElement>) => {
        dispatch(setBankAction({type: "delete", bankId}));
    }

    const onEditBank = (e: MouseEvent<HTMLLIElement>) => {
        dispatch(setBankAction({type: "edit", bankId}));
    }

    return {onDeleteBank, onEditBank};
}

export const useFindBank = () => {
    const {bankAction, banks} = useSelector(selectBanks);
    if (!bankAction) return {bank: null, bankAction: null};
    const bank = banks.find(b => b.bankId === bankAction.bankId);
    return {bank, bankAction};
}
