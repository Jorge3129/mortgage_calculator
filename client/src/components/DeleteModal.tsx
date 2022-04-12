import React, {FC, MouseEvent} from 'react';
import {Bank} from "../types/types";
import st from './styles/Modal.module.css'
import {useDispatch} from "react-redux";
import {deleteBank, setBankAction} from "../pages/banks/banks.reducer";
import Button from "./Button";

interface IDeleteModal {
    bank?: Bank;
}

const DeleteModal: FC<IDeleteModal> = ({bank}) => {

    const dispatch = useDispatch();

    const cancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setBankAction());
    }

    const confirm = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(deleteBank());
    }

    if (!bank) return null;

    return (
        <div className={st.background}>
            <form className={st.modal}>
                <h3 className={st.title}>Delete bank</h3>
                <ul className={st.field_list}>
                    <li className={st.field}>
                        Are you sure you want to delete bank&nbsp;
                        <span className={st.bank_name}>{bank.name}</span>?
                    </li>
                </ul>
                <div className={st.button_list}>
                    <Button onClick={confirm} className={st.button}>
                        OK
                    </Button>
                    <Button onClick={cancel} className={st.button} light={true}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default DeleteModal;
