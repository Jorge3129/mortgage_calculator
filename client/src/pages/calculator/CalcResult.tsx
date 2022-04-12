import React, {FC} from "react";
import st from "./Calculator.module.css";
import BankCard from "../banks/BankCard";
import {useBankContext} from "./BankContext";

interface IResult {
    result: string;
}

const CalcResult: FC<IResult> = ({result}) => {

    const {bank} = useBankContext();

    const bankCard = bank ?
        <BankCard bank={bank} className={st.form_bank}/> :
        <div className={st.form_bank_message}>Please select a bank</div>

    return (
        <div className={st.result_list}>
            <div className={st.form_bank_wrap}>
                {bankCard}
            </div>
            <div className={st.result_wrap}>
                <h4 className={st.result_title}>Your payment:</h4>
                <div className={st.result}>
                    {result}
                </div>
            </div>
        </div>)
}

export default CalcResult;
