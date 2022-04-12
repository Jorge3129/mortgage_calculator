import React, {FC} from 'react';
import st from "./styles/Card.module.css";

interface ICard {
    className?: string;
}

const Card: FC<ICard> = ({className, children}) => {

    const classList = " " + (className || "");

    return (
        <div className={st.card + classList}>
            {children}
        </div>
    );
};

export default Card;
