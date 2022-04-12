import React from 'react';
import DeleteModal from "../../components/modals/DeleteModal";
import CreateModal from "../../components/modals/CreateModal";
import {useFindBank} from "./utils/bank.hooks";
import EditModal from "../../components/modals/EditModal";

const ModalContainer = () => {

    const {bank, bankAction} = useFindBank();
    if (!bank) return null;

    switch (bankAction.type) {
        case "delete":
            return <DeleteModal bank={bank}/>;
        case "edit":
            return <EditModal bank={bank}/>
        case "create":
            return <CreateModal/>
        default:
            return null;
    }
};

export default ModalContainer;
