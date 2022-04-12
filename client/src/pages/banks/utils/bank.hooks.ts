import {useDispatch, useSelector} from "react-redux";
import {selectBanks, setBankAction} from "./banks.reducer";
import {bankThunk} from "./bank.thunk";
import {MouseEvent, useEffect} from "react";

export const useFetchBanks = () => {
    const {banks} = useSelector(selectBanks);
    const dispatch = useDispatch();

    useEffect(() => {
        if (banks.length) return;
        dispatch(bankThunk(1));
    }, []);
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

    return {deleteBank, editBank};
}

export const useFindBank = () => {
    const {bankAction, banks} = useSelector(selectBanks);
    if (!bankAction) return {bank: null, bankAction: null};
    const bank = banks.find(b => b.bankId === bankAction.bankId);
    return {bank, bankAction};
}
