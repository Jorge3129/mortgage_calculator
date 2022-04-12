import {createContext, Dispatch, SetStateAction, useContext} from "react"
import {Bank} from "../../types/types"

type NullBank = Bank | null

export interface IBankContext {
    bank: NullBank,
    setBank: Dispatch<SetStateAction<NullBank>> | undefined
}

export const BankContext = createContext<IBankContext>({
    bank: null,
    setBank: undefined
})

export const useBankContext = () => useContext(BankContext)
