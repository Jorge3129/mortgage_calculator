import axios, {AxiosResponse} from 'axios';
import {Bank} from "../../../types/types";
import {SERVER_URL} from "../../../config";

class BankAPI {
    static async getBanks(userId: number): Promise<AxiosResponse<Bank[]>> {
        try {
            return await axios.get<Bank[]>(SERVER_URL + '/banks/' + userId);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async postBank(bank: Bank) {
        try {
            return await axios.post(SERVER_URL + '/banks/', bank);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async updateBank(bank: Bank) {
        try {
            return await axios.patch(SERVER_URL + '/banks/', bank);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async deleteBank(bankId: number) {
        try {
            return await axios.delete(SERVER_URL + '/banks/' + bankId);
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

export default BankAPI;
