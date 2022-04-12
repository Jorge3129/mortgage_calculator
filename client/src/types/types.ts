export interface AuthUser {
    userId: number;
    first_name: string;
    last_name: string;
    password: string;
    email: string;
}

export type PartialUser = Omit<AuthUser, "password">

export interface Guest {
    userId: number;
    first_name: "Guest"
}

export type User = AuthUser | Guest;

export type KeyObject = { [key: string]: any }

export type Bank = {
    bankId: number;
    name: string;
    interestRate: number;
    maxLoan: number;
    minDownPayment: number;
    loanTerm: number;
} & KeyObject

type StringOnly<T> = {
    [P in keyof T]: string;
};

export type InputType = "number" | "text" | "date" | "file" | "password" | "email";
export type InputField<T> = { key: keyof T, title: string, type: InputType }

export type NewBank = StringOnly<Omit<Bank, "bankId">>
export type BankField = InputField<NewBank>
