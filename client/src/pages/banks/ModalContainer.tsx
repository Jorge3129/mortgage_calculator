import React from 'react';
import DeleteModal from "../../components/modals/DeleteModal";
import CreateModal from "../../components/modals/CreateModal";
import {useFindBank} from "./utils/bank.hooks";
import EditModal from "../../components/modals/EditModal";

const ModalContainer = () => {

    const {bank, bankAction} = useFindBank();

    if (!bankAction) return null;

    switch (bankAction.type) {
        case "delete":
            return bank ? <DeleteModal bank={bank}/> : null;
        case "edit":
            return bank ? <EditModal bank={bank}/> : null;
        case "create":
            return <CreateModal/>
        default:
            return null;
    }
};

export default ModalContainer;
