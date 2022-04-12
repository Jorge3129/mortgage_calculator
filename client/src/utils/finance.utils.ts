import {Bank} from "../types/types"

export const money = (num: number, currency?: string) => {
    return (num + '')
        .split('')
        .map((ch, i, {length}) =>
            (length - i) % 3 === 0 ? ' ' + ch : ch
        )
        .join('') + (currency || "");
}

type PaymentReply = number;

export const calculatePayment = (initialLoan: number, bank: Bank): PaymentReply => {
    const {interestRate, loanTerm} = bank;
    const monthRate = interestRate / 12;
    const power = Math.pow((1 + monthRate), loanTerm);
    return initialLoan * monthRate * power / (power - 1);
}
