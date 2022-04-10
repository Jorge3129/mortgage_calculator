import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Bank} from "../../types/types";
import {RootState} from "../../redux/rootReducer";
import API from "./bank.api";

interface UserAction {
    type: "delete" | "create" | "edit";
    bankId: number;
}

interface bankState {
    banks: Bank[]
    loading: boolean
    error: boolean
    userAction?: UserAction;
}

const initialState: bankState = {
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
            const userAction = state.userAction;
            if (!userAction) return state;
            state.banks = state.banks.filter(bank => bank.bankId !== userAction.bankId);
            state.userAction = undefined;
        },
        setUserAction: (state, {payload}: PayloadAction<UserAction | undefined>) => {
            state.userAction = payload;
        },
    }
})

export const {setLoading, setBanks, setUserAction, deleteBank} = bankSlice.actions;

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
