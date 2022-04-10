import axios from 'axios';
import {Bank} from "../../types/types";

class BankAPI {
    static async getBanks(userId: number) {
        return await axios.get('http://localhost:9001/banks/' + userId);
    }

    static async deleteBank(bankId: number) {
        return await axios.delete('http://localhost:9001/banks/' + bankId);
    }
}

export default BankAPI;
