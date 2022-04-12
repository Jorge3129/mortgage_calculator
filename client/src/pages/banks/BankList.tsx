import React from 'react';
import st from "./Banks.module.css";
import BankCard from "./BankCard";
import {useSelector} from "react-redux";
import {selectBanks} from "./banks.reducer";
import Loader from "../../components/Loader";

const BankList = () => {

    const {loading, banks} = useSelector(selectBanks);

    if (loading) return <Loader className={"page_content"}/>

    return <div className={"page_content"}>
        <ul className={st.card_list}>
            {banks.map((bank, i) =>
                <BankCard
                    key={bank.bankId}
                    bank={bank}
                />)}
        </ul>
    </div>;
};

export default BankList;
