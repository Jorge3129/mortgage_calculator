import React, {FC, MouseEvent} from 'react';
import st from './styles/Button.module.css'

interface IButton {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    parentClass?: string;
    light?: boolean;
    style?: { [key: string]: string }
}

const Button: FC<IButton> = (
    {
        onClick,
        className,
        parentClass,
        light,
        style,
        children
    }) => {

    const classList = " " + [className || "", light ? st.light : ""].join(" ");

    return (
        <div className={parentClass || ""}>
            <button
                type="submit"
                onClick={onClick}
                className={st.button + classList}
                style={style}
            >
                {children}
            </button>
        </div>

    )
};

export default Button;
