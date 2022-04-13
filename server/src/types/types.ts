export interface AuthUser {
    userId: number;
    first_name: string;
    last_name: string;
    password: string;
    email?: string;
}

export interface Guest {
    userId: number;
    first_name: "Guest"
}

export type User = AuthUser | Guest;

export interface Bank {
    bankId: number;
    name: string;
    interestRate: number;
    maxLoan: number;
    minDownPayment: number;
    loanTerm: number;
    userId: number;
}
