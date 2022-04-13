import React, {Dispatch, FC} from 'react';
import st from './Modal.module.css'
import Modal, {IBankModal} from "./Modal";
import {deleteBank} from "../../pages/banks/utils/banks.reducer";
import BankApi from "../../pages/banks/utils/bank.api";

const DeleteModal: FC<IBankModal> = ({bank}) => {

    const onConfirm = async (dispatch: Dispatch<any>, payload: number) => {
        dispatch(deleteBank(payload));
        await BankApi.deleteBank(payload);
    }

    return (
        <Modal title="Delete bank" onConfirm={onConfirm} payload={bank.bankId}>
            <li className={st.field}>
                Are you sure you want to delete bank&nbsp;
                <span className={st.bank_name}>{bank?.name}</span>?
            </li>
        </Modal>
    );
};

export default DeleteModal;
