import {useDispatch, useSelector} from "react-redux";
import {bankThunk, selectBanks, setBankAction} from "./banks.reducer";
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
