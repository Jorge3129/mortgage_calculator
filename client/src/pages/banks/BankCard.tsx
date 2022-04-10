import React, {FC, MouseEvent} from 'react';
import st from './Banks.module.css'
import {Bank} from "../../types/types";
import {money} from "../../utils/finance.utils";
import {useDispatch} from "react-redux";
import {setUserAction} from "./banks.reducer";

interface IBankCard {
    bank: Bank;
    color?: string;
}

const BankCard: FC<IBankCard> = ({bank, color}) => {
    const {bankId, name, interestRate, maxLoan, minDownPayment, loanTerm} = bank;

    const dispatch = useDispatch();

    const fields = [
        {key: 'Interest rate: ', value: interestRate + '%'},
        {key: 'Maximum loan: ', value: money(maxLoan)},
        {key: 'Minimum down payment: ', value: money(minDownPayment)},
        {key: 'Loan term: ', value: loanTerm + ' months'},
    ]

    const deleteBank = (e: MouseEvent<HTMLLIElement>) => {
        const card = e.currentTarget.closest('.bank_card');
        if (!card?.id) return;
        const bankId = parseInt(card.id.replace('bank', ''));
        dispatch(setUserAction({type: "delete", bankId}));
    }

    return (
        <div className={st.card + " bank_card"} style={{backgroundColor: color}} id={'bank' + bankId}>
            <h3 className={st.card_title}>
                {name}
            </h3>
            <ul className={st.field_list}>
                {fields.map(({key, value}) =>
                    <li key={key} className={st.field}>
                        <span className={st.key}>{key}</span>
                        <span className={st.value}>{value}%</span>
                    </li>)
                }
            </ul>
            <ul className={st.options}>
                <li className={st.option}>
                    <i className="fa-solid fa-pen"/>
                </li>
                <li className={st.option} onClick={deleteBank}>
                    <i className="fa-solid fa-trash-can"/>
                </li>
            </ul>
        </div>
    );
};

export default BankCard;
