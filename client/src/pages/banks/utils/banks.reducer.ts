import {createAsyncThunk, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {Bank, NewBank} from "../../../types/types";
import {RootState} from "../../../redux/rootReducer";
import API from "./bank.api";

export interface IBankAction {
    type: "delete" | "create" | "edit";
    bankId: number;
}

interface BankState {
    banks: Bank[]
    loading: boolean
    error: boolean
    bankAction?: IBankAction;
    userId?: number;
}

const initialState: BankState = {
    banks: [],
    loading: false,
    error: false,
}

const bankSlice = createSlice({
    name: 'banks',
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.loading = payload;
        },
        setBanks: (state, {payload}: PayloadAction<Bank[]>) => {
            state.banks = payload;
        },
        deleteBank: (state, {payload}: PayloadAction<number>) => {
            state.banks = state.banks.filter(bank => bank.bankId !== payload);
            state.bankAction = undefined;
        },
        editBank: (state, {payload}: PayloadAction<Bank>) => {
            let bank = findBank(state);
            if (bank) Object.assign(bank, payload)
            state.bankAction = undefined;
        },
        createBank: (state, {payload}: PayloadAction<Bank>) => {
            state.banks.push(payload);
            state.bankAction = undefined;
        },
        setBankAction: (state, {payload}: PayloadAction<IBankAction | undefined>) => {
            state.bankAction = payload;
        },
        setUserId: (state, {payload}: PayloadAction<number | undefined>) => {
            state.userId = payload;
        },
    }
})

const findBank = (state: Draft<BankState>) => state.banks.find(bank => bank.bankId === state.bankAction?.bankId)

export type BankAction = typeof deleteBank | typeof editBank | typeof createBank;
export const {setLoading, setBanks, setBankAction, deleteBank, editBank, createBank, setUserId} = bankSlice.actions;
export const selectBanks = (state: RootState) => state.banks
export default bankSlice.reducer
