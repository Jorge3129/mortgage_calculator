import {FC} from 'react';
import BankList from "./BankList";
import PageTitle from "../../components/PageTitle";
import ModalContainer from "./ModalContainer";
import {useFetchBanks} from "./utils/bank.hooks";

const BankPage: FC = () => {
    useFetchBanks();

    return (
        <main className={"main "}>
            <PageTitle title={"Your banks"}/>
            <BankList/>
            <ModalContainer/>
        </main>
    );
};

export default BankPage;
