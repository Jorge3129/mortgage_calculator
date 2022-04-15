import React, {MouseEvent} from 'react';
import st from "./Banks.module.css";
import BankCard from "./BankCard";
import {useDispatch, useSelector} from "react-redux";
import {selectBanks, setBankAction} from "./utils/banks.reducer";
import Loader from "../../components/Loader";

const BankList = () => {

    const {loading, banks} = useSelector(selectBanks);
    const dispatch = useDispatch();

    if (loading) return <Loader className={"page_content"}/>

    const onCreateBank = (e: MouseEvent<HTMLElement>) => {
        dispatch(setBankAction({type: "create", bankId: 0}));
    }

    const list = banks.map(bank =>
        <BankCard
            key={bank.bankId}
            bank={bank}
        />)

    return <div className={"page_content"}>
        <ul className={st.card_list}>
            {list}
        </ul>
        <button onClick={onCreateBank} className={st.button + " bank_button"}>
            <i className={"fa-solid fa-plus " + st.button_icon}/>
        </button>
    </div>;
};

export default BankList;
