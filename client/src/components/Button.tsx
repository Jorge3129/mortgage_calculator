import React, {FC, MouseEvent} from 'react';
import st from './styles/Button.module.css'

interface IButton {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    light?: boolean;
}

const Button: FC<IButton> = ({onClick, className, light, children}) => {

    const classList = " " + [className || "", light ? st.light : ""].join(" ");

    return (
        <button
            type="submit"
            onClick={onClick}
            className={st.button + classList}
        >
            {children}
        </button>
    )
};

export default Button;
