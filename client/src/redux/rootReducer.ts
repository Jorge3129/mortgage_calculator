import {combineReducers} from "redux";
import bankReducer from '../pages/banks/banks.reducer'

const rootReducer = combineReducers({
    banks: bankReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
