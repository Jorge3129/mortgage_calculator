import React, {FC, MouseEvent} from 'react';
import {Bank} from "../types/types";
import st from './styles/Modal.module.css'
import {useDispatch} from "react-redux";
import {deleteBank, setUserAction} from "../pages/banks/banks.reducer";

interface IDeleteModal {
    item: Bank;
}

const DeleteModal: FC<IDeleteModal> = ({item}) => {

    const dispatch = useDispatch();

    const cancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setUserAction());
    }

    const confirm = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(deleteBank());
    }

    return (
        <div className={st.background}>
            <div className={st.modal}>
                <form className={st.form}>
                    <h3>Delete</h3>
                    Are you sure you want to delete bank {item.name}?
                    <button type="submit" onClick={confirm}>Confirm</button>
                    <button type="submit" onClick={cancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default DeleteModal;
