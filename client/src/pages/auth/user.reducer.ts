import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Bank, User} from "../../types/types";
import {RootState} from "../../redux/rootReducer";

interface UserState {
    user: User | null;
    loading: boolean,
    error: boolean,
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.loading = payload;
        },
        setUser: (state, {payload}: PayloadAction<User>) => {
            state.user = payload;
        },
    }
})

export const {setLoading} = userSlice.actions;

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
