import React, {useState, MouseEvent} from "react";
import {registerFields, RegState, regState} from "./auth.utils";
import st from "./Auth.module.css";
import FieldList from "../../components/modals/FieldList";
import Button from "../../components/Button";

const Register = () => {

    const [state, setState] = useState<RegState>(regState);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    };

    return (
        <form className={st.form}>
            <h3>Register</h3>
            <FieldList state={state} setState={setState} fields={registerFields}/>
            <Button
                className={st.button}
                onClick={onClick}
            >
                Submit
            </Button>
        </form>
    );
};

export default Register;
