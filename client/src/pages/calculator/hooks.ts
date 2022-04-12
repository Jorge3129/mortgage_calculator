import {Bank} from "../../types/types";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {useSelector} from "react-redux";
import {selectBanks} from "../banks/banks.reducer";

export interface CalcState {
    loan: string;
    payment: string;
    bank: Bank | null;
}

const initialState: CalcState = {
    loan: "",
    payment: "",
    bank: null,
}

export const useFormState = () => {

    const {banks} = useSelector(selectBanks);

    const [state, setState] = useState<CalcState>(initialState)

    const handleLoan = (e: ChangeEvent<HTMLInputElement>) => {
        setState({...state, loan: e.target.value});
    }

    const handlePayment = (e: ChangeEvent<HTMLInputElement>) => {
        setState({...state, payment: e.target.value});
    }

    const handleBank = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "--") setState({...state, bank: null})
        const bank = banks.find(bank => bank.name === e.target.value);
        if (bank) setState({...state, bank});
    }

    return {state, handleLoan, handlePayment, handleBank, banks}
}


export const useCountUpToResult =
    (
        num: number,
        interval: number,
        setResult: Dispatch<SetStateAction<string>>
    ) => {


        const timer = setInterval(() => {

        }, interval)
    }
