import {Bank, NewBank} from "../../../types/types";
import {money} from "../../../utils/finance.utils";

export const getFields = ({interestRate, maxLoan, minDownPayment, loanTerm}: Bank) =>
    [
        {key: 'Interest rate: ', value: interestRate + '%'},
        {key: 'Max. loan: ', value: money(maxLoan, "$")},
        {key: 'Min. down payment: ', value: money(minDownPayment, "$")},
        {key: 'Loan term: ', value: loanTerm + ' months'},
    ]

export const toNewBank = (bank: Bank): NewBank => {
    const newBank: { [key: string]: any } = {};
    Object.keys(bank).forEach((key) => {
        if (key !== "bankId") newBank[key] = bank[key] + "";
    });
    return newBank;
}

export const newToBank = (newBank: NewBank, bankId: number): Bank => {
    const bank: { [key: string]: any } = {bankId};
    Object.keys(newBank).forEach((key) => {
        if (key === "name") return bank[key] = newBank[key]
        bank[key] = parseInt(newBank[key]);
    });
    return bank as Bank;
}
