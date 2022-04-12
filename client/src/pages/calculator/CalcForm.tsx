import React, {ChangeEvent, Dispatch, FC, SetStateAction, useState} from 'react';
import st from "./Calculator.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {useFocus} from "../../components/hooks/useFocus";
import Select from "../../components/Select";
import {calculatePayment, money} from "../../utils/finance.utils";
import {useFormState} from "./hooks";

interface FormProps {
    setResult: Dispatch<SetStateAction<string>>;
}

const CalcForm: FC<FormProps> = ({setResult}) => {

    const inputRef = useFocus();
    const {state, handleLoan, handlePayment, handleBank, banks} = useFormState();

    const calculate = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!state.bank) return;
        const payment = Math.round(calculatePayment(parseInt(state.loan), state.bank));
        setResult(money(payment, " $"))
    }

    return (
        <form className={st.form}>
            <Input
                value={state.loan || ""}
                onChange={handleLoan}
                type="number"
                ref={inputRef}
            >
                Initial loan:
            </Input>
            <Input
                value={state.payment || ""}
                onChange={handlePayment}
                type="number"
            >
                Down payment:
            </Input>
            <Select
                options={["--", ...banks.map(b => b.name)]}
                handleSelect={handleBank}
            >
                Bank:
            </Select>
            <div className={st.button_wrap}>
                <Button onClick={calculate}>Calculate</Button>
            </div>
        </form>
    );
};

export default CalcForm;
