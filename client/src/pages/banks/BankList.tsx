import React from 'react';
import st from "./Banks.module.css";
import BankCard from "./BankCard";
import {useSelector} from "react-redux";
import {selectBanks} from "./utils/banks.reducer";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import {useBankActions} from "./utils/bank.hooks";

const BankList = () => {

    const {loading, banks} = useSelector(selectBanks);
    const {createBank} = useBankActions();

    if (loading) return <Loader className={"page_content"}/>

    return <div className={"page_content"}>
        <ul className={st.card_list}>
            {banks.map((bank, i) =>
                <BankCard
                    key={bank.bankId}
                    bank={bank}
                />)}
        </ul>
        <Button
            onClick={createBank}
            parentClass={st.create_button_wrap}
            style={{
                fontWeight: "100",
                padding: "0.2em 0.5em",
                borderRadius: "50%"
            }}
        >
            +
        </Button>
    </div>;
};

export default BankList;
