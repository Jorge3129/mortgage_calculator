import Modal, {IBankModal} from "./Modal";
import {editBank} from "../../pages/banks/utils/banks.reducer";
import {Dispatch, FC, useState} from "react";
import FieldList from "./FieldList";
import {NewBank} from "../../types/types";
import {newToBank, toNewBank} from "../../pages/banks/utils/bank.utils";
import BankApi from "../../pages/banks/utils/bank.api";
import {bankFields} from "./modal.utils";

const EditModal: FC<IBankModal> = ({bank}) => {

    const [state, setState] = useState<NewBank>(toNewBank(bank));

    const onConfirm = async (dispatch: Dispatch<any>, payload: NewBank) => {
        const fullBank = newToBank(payload, bank.bankId);
        dispatch(editBank(fullBank));
        await BankApi.updateBank(fullBank);
    }

    return (
        <Modal title={"Edit bank "} onConfirm={onConfirm} payload={state}>
            <FieldList state={state} setState={setState} fields={bankFields}/>
        </Modal>
    );
};

export default EditModal;
