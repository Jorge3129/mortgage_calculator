import {combineReducers} from "redux";
import banks from '../pages/banks/banks.reducer'
import user from '../pages/banks/banks.reducer'

const rootReducer = combineReducers({banks, user})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
