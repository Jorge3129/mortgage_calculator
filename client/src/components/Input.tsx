import React, {ChangeEvent, forwardRef, PropsWithChildren} from 'react';
import st from "./styles/Input.module.css";
import {InputType} from "../types/types";

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    labelClass?: string;
    type?: InputType;
    required?: boolean
    error?: string,
}

const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
    (
        {
            type,
            required,
            className,
            labelClass,
            value,
            onChange,
            error,
            children
        },
        inputRef) => {

        return (
            <label className={st.field + " " + (labelClass || "")}>
                {children}<br/>
                <input
                    type={type || "text"}
                    className={st.input + " " + (className || "")}
                    ref={inputRef}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
                <div className={st.error_container + (error ? " " + st.active : "")}>
                    <span className={st.error}>
                        {error}
                    </span>
                </div>
            </label>
        );
    })

export default Input;
