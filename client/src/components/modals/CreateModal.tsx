import {Dispatch, useState} from 'react'
import Modal from "./Modal";
import FieldList from "./FieldList";
import {NewBank} from '../../types/types';
import {bankFields, initState} from "./modal.utils";
import BankApi from "../../pages/banks/utils/bank.api";
import {newToBank} from "../../pages/banks/utils/bank.utils";
import {createBank} from "../../pages/banks/utils/banks.reducer";
import {useAuthContext} from '../../pages/auth/AuthContext';

const CreateModal = () => {

    const [state, setState] = useState<NewBank>(initState);
    const {user} = useAuthContext()

    const onConfirm = async (dispatch: Dispatch<any>, payload: NewBank) => {
        const res = await BankApi.postBank({...newToBank(payload, 0), userId: user?.userId});
        if (!res) return;
        dispatch(createBank(newToBank(payload, res.data.insertId)));
    }

    return (
        <Modal title={"Create bank"} onConfirm={onConfirm} payload={state}>
            <FieldList state={state} setState={setState} fields={bankFields}/>
        </Modal>
    );
};

export default CreateModal;
