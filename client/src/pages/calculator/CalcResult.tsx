import React, {FC} from "react";
import st from "./Calculator.module.css";

interface IResult {
    result: string;
}

const CalcResult: FC<IResult> = ({result}) => {

    return (
        <div className={st.result_wrap}>
            <h4 className={st.result_title}>Your payment:</h4>
            <div className={st.result}>
                {result}
            </div>
        </div>)
}

export default CalcResult;
