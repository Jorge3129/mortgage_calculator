import {useDispatch, useSelector} from "react-redux";
import {selectBanks, setBankAction, setUserId} from "./banks.reducer";
import {bankThunk} from "./bank.thunk";
import {MouseEvent, useEffect} from "react";
import {useAuthContext} from "../../auth/AuthContext";

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

export const useBankActions = () => {
    const dispatch = useDispatch();

    const dispatchAction = (e: MouseEvent<HTMLLIElement>, type: 'delete' | 'edit') => {
        const card = e.currentTarget.closest('.bank_card');
        if (!card?.id) return null;
        const bankId = parseInt(card.id.replace('bank', ''));
        dispatch(setBankAction({type, bankId}));
    }

    const deleteBank = (e: MouseEvent<HTMLLIElement>) => {
        dispatchAction(e, 'delete');
    }

    const editBank = (e: MouseEvent<HTMLLIElement>) => {
        dispatchAction(e, 'edit');
    }

    const createBank = (e: MouseEvent<HTMLElement>) => {
        dispatch(setBankAction({type: "create", bankId: 0}));
    }

    return {deleteBank, editBank, createBank};
}

export const useFindBank = () => {
    const {bankAction, banks} = useSelector(selectBanks);
    if (!bankAction) return {bank: null, bankAction: null};
    const bank = banks.find(b => b.bankId === bankAction.bankId);
    return {bank, bankAction};
}
