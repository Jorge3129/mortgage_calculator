import {combineReducers} from "redux";
import banks from '../pages/banks/utils/banks.reducer'

const rootReducer = combineReducers({banks})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
