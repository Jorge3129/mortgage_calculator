import Modal, {IBankModal} from "./Modal";
import {editBank} from "../../pages/banks/utils/banks.reducer";
import {FC, useState} from "react";
import FieldList from "./FieldList";
import {NewBank} from "../../types/types";
import {newToBank, toNewBank} from "../../pages/banks/utils/bank.utils";
import BankApi from "../../pages/banks/utils/bank.api";
import {bankFields} from "./modal.utils";

const EditModal: FC<IBankModal> = ({bank}) => {

    const [state, setState] = useState<NewBank>(toNewBank(bank));
    const request = (payload: NewBank) => BankApi.updateBank(newToBank(payload, bank.bankId))
    const onConfirm = {action: editBank, request}

    return (
        <Modal title={"Edit bank "} onConfirm={onConfirm} payload={state}>
            <FieldList state={state} setState={setState} fields={bankFields}/>
        </Modal>
    );
};

export default EditModal;
