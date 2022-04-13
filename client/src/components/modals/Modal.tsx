import React, {Dispatch, FC, MouseEvent} from 'react';
import st from "./Modal.module.css";
import Button from "../Button";
import {Bank} from "../../types/types";
import {useDispatch} from "react-redux";
import {setBankAction} from "../../pages/banks/utils/banks.reducer";

interface IModal {
    title: string;
    onConfirm: (dispatch: Dispatch<any>, payload: any) => void;
    payload?: any
}

export interface IBankModal {
    bank: Bank;
}

const Modal: FC<IModal> = (
    {
        title,
        onConfirm,
        payload,
        children
    }) => {

    const dispatch = useDispatch();

    const cancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setBankAction());
    }

    const confirm = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onConfirm(dispatch, payload)
    }

    return (
        <div className={st.background}>
            <form className={st.modal}>
                <h3 className={st.title}>{title}</h3>
                <ul className={st.field_list}>
                    {children}
                </ul>
                <div className={st.button_list}>
                    <Button onClick={confirm} parentClass={st.button}>
                        OK
                    </Button>
                    <Button onClick={cancel} parentClass={st.button} light={true}>
                        Cancel
                    </Button>
                </div>
                <button onClick={cancel} className={st.close_button}>✖</button>
            </form>
        </div>
    );
};

export default Modal;
