import {Bank} from "../../types/types";
import {money} from "../../utils/finance.utils";

export const getFields = ({interestRate, maxLoan, minDownPayment, loanTerm}: Bank) =>
    [
        {key: 'Interest rate: ', value: interestRate + '%'},
        {key: 'Maximum loan: ', value: money(maxLoan, "$")},
        {key: 'Minimum down payment: ', value: money(minDownPayment, "$")},
        {key: 'Loan term: ', value: loanTerm + ' months'},
    ]

