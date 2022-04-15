import React, {FC} from 'react';
import st from './Banks.module.css'
import {Bank} from "../../types/types";
import {getFields} from "./utils/bank.utils";
import {useBankActions} from "./utils/bank.hooks";
import {isMobile} from "../../utils/general.utils";

interface IBankCard {
    bank: Bank;
    color?: string;
    className?: string;
}

const BankCard: FC<IBankCard> = ({bank, className}) => {
    const {bankId, name} = bank;
    const fields = getFields(bank);
    const {onDeleteBank, onEditBank} = useBankActions(bank);

    const mobile = isMobile() ? " " + st.mobile : "";

    return (
        <div className={className || st.card + " bank_card" + mobile} id={'bank' + bankId}>
            <h3 className={st.card_title}>
                {name}
            </h3>
            <ul className={st.field_list}>
                {fields.map(({key, value}) =>
                    <li key={key} className={st.field}>
                        <div className={st.key}>{key}</div>
                        <div className={st.value}>{value}</div>
                    </li>)
                }
            </ul>
            <ul className={st.options}>
                <li className={st.option} onClick={onEditBank}>
                    <i className="fa-solid fa-pen"/>
                </li>
                <li className={st.option} onClick={onDeleteBank}>
                    <i className="fa-solid fa-trash-can"/>
                </li>
            </ul>
        </div>
    );
};

export default BankCard;
