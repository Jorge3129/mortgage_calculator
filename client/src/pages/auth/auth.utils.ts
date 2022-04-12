import {AuthUser, InputField} from "../../types/types"

export type RegState = Omit<AuthUser, "userId">

export const regState: RegState = {
    first_name: "",
    last_name: "",
    password: "",
    email: "",
}

export type LoginState = Omit<RegState, "first_name" | "last_name">

export const loginState: LoginState = {
    password: "",
    email: "",
}

export const registerFields: InputField<RegState>[] = [
    {key: "first_name", title: "First name: ", type: "text"},
    {key: "last_name", title: "Last name: ", type: "text"},
    {key: "email", title: "Email: ", type: "email"},
    {key: "password", title: "Password: ", type: "password"},
]

export const loginFields: InputField<LoginState>[] = [
    {key: "email", title: "Email: ", type: "email"},
    {key: "password", title: "Password: ", type: "password"},
]
