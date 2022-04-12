import React, {FC} from 'react';
import st from './styles/Loader.module.css'

interface ILoader {
    className: string;
}

const Loader: FC<ILoader> = ({className}) => {

    return (
        <div className={st.loader_container + " " + className}>
            <div className={st.loader}>
                <div className={st.loader_inside}>

                </div>
            </div>
        </div>
    );
};

export default Loader;
