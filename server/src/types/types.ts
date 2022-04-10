export interface User {
    userId: number;
    first_name: string;
    last_name: string;
    password: string;
    email: string;
    phone?: string;
}

export interface Bank {
    bankId: number;
    name: string;
    interestRate: number;
    maxLoan: number;
    minDownPayment: number;
    loanTerm: number;
}
