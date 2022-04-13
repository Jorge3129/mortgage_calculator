import React, {ChangeEvent, Dispatch, FC, SetStateAction, useState} from 'react';
import st from "./Calculator.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {useFocus} from "../../components/hooks/useFocus";
import Select from "../../components/Select";
import {calculatePayment, money} from "../../utils/finance.utils";
import {useFormState} from "./hooks";
import {isEmpty} from "../banks/utils/bank.utils";

interface FormProps {
    setResult: Dispatch<SetStateAction<string>>;
}

const CalcForm: FC<FormProps> = ({setResult}) => {

    //const inputRef = useFocus();
    const {state, error, handleLoan, handlePayment, handleBank, banks} = useFormState();

    const calculate = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!state.bank) return;
        if (isEmpty(state)) {
            alert("Please enter correct data");
            return;
        }
        const payment = Math.round(calculatePayment(parseInt(state.loan), state.bank));
        setResult(isNaN(payment) ? "" : money(payment, " $"))
    }

    return (
        <form className={st.form}>
            <Select
                options={["--", ...banks.map(b => b.name)]}
                handleSelect={handleBank}
            >
                Bank:
            </Select>
            <Input
                value={state.loan || ""}
                onChange={handleLoan}
                type="number"
                required={true}
                error={error.loan}
                //ref={inputRef}
            >
                Initial loan:
            </Input>
            <Input
                value={state.payment || ""}
                onChange={handlePayment}
                type="number"
                required={true}
                error={error.payment}
            >
                Down payment:
            </Input>
            <div className={st.button_wrap}>
                <Button parentClass={st.button} onClick={calculate}>Calculate</Button>
            </div>
        </form>
    );
};

export default CalcForm;
