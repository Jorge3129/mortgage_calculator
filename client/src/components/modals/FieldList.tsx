import React, {Dispatch, SetStateAction} from 'react';
import Input from "../Input";
import {InputField, KeyObject} from "../../types/types";
import {useFocus} from "../hooks/useFocus";

interface Props<T> {
    fields: InputField<T>[]
    state: T,
    setState: Dispatch<SetStateAction<T>>,
}

const FieldList = <T extends KeyObject>({state, setState, fields}: Props<T>) => {

    const inputRef = useFocus();

    return (
        <>
            {fields.map(({key, type, title}, i) =>
                <Input
                    value={state[key]}
                    onChange={(e) => {
                        setState({...state, [key]: e.target.value})
                    }}
                    type={type}
                    ref={i ? null : inputRef}
                    key={key + ""}
                >
                    {title}
                </Input>
            )}
        </>
    );
};

export default FieldList;
