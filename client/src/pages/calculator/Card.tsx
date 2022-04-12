import React, {useState} from 'react';
import st from "./Calculator.module.css";
import {useFetchBanks} from "../banks/utils/bank.hooks";
import CalcForm from "./CalcForm";
import CalcResult from "./CalcResult";
import {BankContext} from './BankContext'
import {NullBank} from "./hooks";

const Card = () => {

    useFetchBanks();
    const [result, setResult] = useState<string>("");
    const [bank, setBank] = useState<NullBank>(null)

    return (
        <BankContext.Provider value={{bank, setBank}}>
            <div className={st.card_container}>
                <CalcForm setResult={setResult}/>
                <CalcResult result={result}/>
            </div>
        </BankContext.Provider>

    )
}

export default Card;

