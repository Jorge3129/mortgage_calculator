import React, {useState} from 'react';
import st from "./Calculator.module.css";
import {useFetchBanks} from "../banks/bank.hooks";
import CalcForm from "./CalcForm";
import CalcResult from "./CalcResult";

const Card = () => {

    useFetchBanks();
    const [result, setResult] = useState<string>("");

    return (
        <div className={st.card_container}>
            <CalcResult result={result}/>
            <CalcForm setResult={setResult}/>
        </div>
    )
}

export default Card;

