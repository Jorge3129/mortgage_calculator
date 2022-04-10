import {FC, useState, useEffect} from 'react';
import st from './Banks.module.css'
import BankCard from "./BankCard";
import DeleteModal from "../../components/DeleteModal";
import {useDispatch, useSelector} from "react-redux";
import {bankThunk, selectBanks} from "./banks.reducer";
import Loader from "../../components/Loader";

type DisplayMode = 'table' | 'cards';

const BankPage: FC = () => {
    const {loading, banks, userAction} = useSelector(selectBanks);
    const dispatch = useDispatch();
    const [mode, setMode] = useState<DisplayMode>('table');

    useEffect(() => {
        if (banks) return;
        dispatch(bankThunk(1));
    }, []);

    const bankList =
        <ul className={st.card_list}>
            {banks.map((bank, i) =>
                <BankCard
                    key={bank.bankId}
                    bank={bank}
                />)}
        </ul>

    return (
        <main className={"main"}>
            <h2 className={"page_title"}>Your banks: </h2>
            {loading ? <Loader/> : bankList}
            {userAction && userAction.type === "delete"
                ? <DeleteModal item={banks[0]}/> : null}
        </main>
    );
};

export default BankPage;
