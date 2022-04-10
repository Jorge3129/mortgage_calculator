import React, {FC} from 'react';
import st from './styles/Loader.module.css'

interface ILoadSpinner {}

const LoadSpinner: FC<ILoadSpinner> = () => {

    return (
        <div className={st.loader_container}>
            <div className={st.loader}>
                <div className={st.loader_inside}>

                </div>
            </div>
        </div>
    );
};

export default LoadSpinner;
