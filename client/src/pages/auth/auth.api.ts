import axios from 'axios';
import {AuthUser, Guest} from "../../types/types";
import {LoginState} from './auth.utils';
import {SERVER_URL} from "../../config";

class AuthAPI {

    static async register(user: AuthUser) {
        try {
            return await axios.post(SERVER_URL + '/auth/register', user);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async login(user: LoginState) {
        try {
            return await axios.post(SERVER_URL + '/auth/login', user);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async guestLogin(user: Guest) {
        try {
            return await axios.post(SERVER_URL + '/auth/guest', user);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    static async getUserById(userId: number) {
        try {
            if (isNaN(userId)) return;
            return await axios.get(SERVER_URL + '/auth/users/' + userId);
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

export default AuthAPI;
