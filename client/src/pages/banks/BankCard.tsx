import React, {FC} from 'react';
import st from './Banks.module.css'
import {Bank} from "../../types/types";
import {getFields} from "./bank.utils";
import {useBankActions} from "./bank.hooks";

interface IBankCard {
    bank: Bank;
    color?: string;
}

const BankCard: FC<IBankCard> = ({bank, color}) => {
    const {bankId, name} = bank;
    const fields = getFields(bank);
    const {deleteBank, editBank} = useBankActions();

    return (
        <div className={st.card + " bank_card"} id={'bank' + bankId}>
            <h3 className={st.card_title}>
                {name}
            </h3>
            <ul className={st.field_list}>
                {fields.map(({key, value}) =>
                    <li key={key} className={st.field}>
                        <span className={st.key}>{key}</span>
                        <span className={st.value}>{value}</span>
                    </li>)
                }
            </ul>
            <ul className={st.options}>
                <li className={st.option} onClick={editBank}>
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
