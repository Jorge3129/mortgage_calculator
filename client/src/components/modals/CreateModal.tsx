import {useState} from 'react'
import Modal from "./Modal";
import {createBank} from "../../pages/banks/utils/banks.reducer";
import FieldList from "./FieldList";
import {NewBank} from '../../types/types';
import {bankFields, initState} from "./modal.utils";
import BankApi from "../../pages/banks/utils/bank.api";

const CreateModal = () => {

    const [state, setState] = useState<NewBank>(initState);
    const onConfirm = {action: createBank, request: BankApi.updateBank}

    return (
        <Modal title={"Create bank"} onConfirm={onConfirm} payload={state}>
            <FieldList state={state} setState={setState} fields={bankFields}/>
        </Modal>
    );
};

export default CreateModal;
