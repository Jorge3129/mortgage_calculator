import {createAsyncThunk} from "@reduxjs/toolkit";
import API from "./bank.api";
import {setBanks, setLoading} from "./banks.reducer";

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
