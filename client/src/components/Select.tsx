import React, {ChangeEvent, FC} from 'react';
import st from "./styles/Input.module.css";

interface Props {
    options: string[]
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<Props> = ({options, handleSelect, children}) => {

    const optionList = options.map((option) =>
        <option key={option} value={option}>
            {option}
        </option>);

    return (
        <label className={st.field}>
            {children}<br/>
            <select
                className={st.select + " " + st.input}
                onChange={handleSelect}
            >
                {optionList}
            </select>
        </label>
    );
};

export default Select;
