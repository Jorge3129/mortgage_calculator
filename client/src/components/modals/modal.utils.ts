import {BankField} from "../../types/types";


export const bankFields: BankField[] = [
    {key: "name", title: "Name: ", type: "text"},
    {key: "interestRate", title: "Interest rate: ", type: "number"},
    {key: "maxLoan", title: "Max. loan: ", type: "number"},
    {key: "minDownPayment", title: "Min. down payment: ", type: "number"},
    {key: "loanTerm", title: "Loan term: ", type: "number"},
]

export const initState = {
    name: "",
    interestRate: "",
    maxLoan: "",
    minDownPayment: "",
    loanTerm: "",
}
