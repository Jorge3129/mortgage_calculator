import React, {ChangeEvent, forwardRef, PropsWithChildren} from 'react';
import st from "./styles/Input.module.css";

export type InputType = "number" | "text" | "date" | "file" | "password" | "email";

interface InputProps {
    className?: string;
    labelClass?: string;
    type?: InputType;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
    (
        {
            type,
            className,
            labelClass,
            value,
            onChange,
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
                />
            </label>
        );
    })

export default Input;
