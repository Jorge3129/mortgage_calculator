import {FC, useState, } from 'react';
import st from './Banks.module.css'
import BankList from "./BankList";
import DeleteModal from "../../components/DeleteModal";
import {useSelector} from "react-redux";
import {selectBanks} from "./banks.reducer";
import PageTitle from "../../components/PageTitle";
import {useFetchBanks} from "./bank.hooks";

type DisplayMode = 'table' | 'cards';

const BankPage: FC = () => {
    const [mode, setMode] = useState<DisplayMode>('table');
    const {bankAction} = useSelector(selectBanks);

    useFetchBanks();

    return (
        <main className={"main "}>
            <PageTitle title={"Your banks: "}/>
            <BankList/>
            {bankAction?.type === "delete"
                ? <DeleteModal bank={bankAction?.bank}/> : null}
        </main>
    );
};

export default BankPage;
