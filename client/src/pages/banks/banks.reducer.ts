import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Bank} from "../../types/types";
import {RootState} from "../../redux/rootReducer";
import API from "./bank.api";

interface BankAction {
    type: "delete" | "create" | "edit";
    bankId: number;
    bank?: Bank;
}

interface BankState {
    banks: Bank[]
    loading: boolean
    error: boolean
    bankAction?: BankAction;
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
        deleteBank: (state, {payload}: PayloadAction<undefined>) => {
            const bankAction = state.bankAction;
            if (!bankAction) return state;
            state.banks = state.banks.filter(bank => bank.bankId !== bankAction.bankId);
            state.bankAction = undefined;
        },
        setBankAction: (state, {payload}: PayloadAction<BankAction | undefined>) => {
            let bankAction = payload;
            const bank = state.banks.find(bank => bank.bankId === payload?.bankId);
            if (!bank || !bankAction) return state.bankAction = undefined;
            bankAction = {...bankAction, bank};
            state.bankAction = bankAction;
        },
    }
})

export const {setLoading, setBanks, setBankAction, deleteBank} = bankSlice.actions;

export const bankThunk = createAsyncThunk('/banks/get',
    async (id: number, thunkApi) => {
        try {
            thunkApi.dispatch(setLoading(true))

            await (async () => {
                return new Promise((resolve) => {
                    setTimeout(() => resolve(''), 800);
                })
            })();

            const response = await API.getBanks(id);
            const banks = response.data;
            thunkApi.dispatch(setBanks(banks))
        } catch (e) {
            console.log(e)
        } finally {
            thunkApi.dispatch(setLoading(false));
        }
    })

export const selectBanks = (state: RootState) => state.banks

export default bankSlice.reducer
