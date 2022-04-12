import axios, {AxiosResponse} from 'axios';
import {Bank} from "../../../types/types";

class BankAPI {
    static async getBanks(userId: number): Promise<AxiosResponse<Bank[]>> {
        return await axios.get<Bank[]>('http://localhost:9001/banks/' + userId);

    }

    static async updateBank(bank: Bank) {
        return await axios.patch('http://localhost:9001/banks/', bank);
    }

    static async deleteBank(bankId: number) {
        return await axios.delete('http://localhost:9001/banks/' + bankId);
    }
}

export default BankAPI;
