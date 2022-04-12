import {Bank} from "../../types/types";
import {ChangeEvent, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectBanks} from "../banks/utils/banks.reducer";
import {useBankContext} from "./BankContext";

export type NullBank = Bank | null;

export interface CalcState {
    loan: string;
    payment: string;
    bank: NullBank;
}

const initialState: CalcState = {
    loan: "",
    payment: "",
    bank: null,
}

type ErrorState = { loan: string, payment: string }

const initError: ErrorState = {
    loan: "",
    payment: "",
}

export const useFormState = () => {
    const [state, setState] = useState<CalcState>(initialState)
    const [error, setError] = useState<ErrorState>(initError)

    /* BANK */

    const {banks} = useSelector(selectBanks);

    const {setBank: setBankCard} = useBankContext();

    const setBankState = (bank: NullBank) => {
        setState({...state, bank}); // form state
        if (setBankCard) setBankCard(bank); // card state
    }

    const setErrorState = (type: "loan" | "payment", message: string) => {
        const newError = type === "loan" ? {...error, loan: message} : {...error, payment: message}
        setError(newError)
    }

    const handleBank = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "--") setBankState(null)
        const bank = banks.find(bank => bank.name === e.target.value);
        if (bank) setBankState(bank)
    }

    const handleLoan = (e: ChangeEvent<HTMLInputElement>) => {
        if (state.bank && state.bank.maxLoan < parseInt(e.target.value))
            setErrorState("loan", "Your loan is too large!")
        else setErrorState("loan", "")
        if (state.bank) setState({...state, loan: e.target.value});
    }

    const handlePayment = (e: ChangeEvent<HTMLInputElement>) => {
        if (state.bank && state.bank.minDownPayment > parseInt(e.target.value))
            setErrorState("payment", "Your payment is too small")
        else setErrorState("payment", "")
        if (state.bank) setState({...state, payment: e.target.value});
    }

    return {state, error, handleLoan, handlePayment, handleBank, banks}
}
