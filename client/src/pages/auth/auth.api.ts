import axios from 'axios';
import {AuthUser, Guest} from "../../types/types";
import {LoginState} from './auth.utils';

class AuthAPI {

    static async register(user: AuthUser) {
        try {
            return await axios.post('http://localhost:9001/auth/register', user);
        } catch (e) {
            console.log(e)
        }
    }

    static async login(user: LoginState) {
        try {
            return await axios.post('http://localhost:9001/auth/login', user);
        } catch (e) {
            console.log(e)
        }
    }

    static async guestLogin(user: Guest) {
        try {
            return await axios.post('http://localhost:9001/auth/guest', user);
        } catch (e) {
            console.log(e)
        }
    }

    static async getUserById(userId: number) {
        try {
            if (isNaN(userId)) return;
            return await axios.get('http://localhost:9001/auth/users/' + userId);
        } catch (e) {
            console.log(e)
        }
    }
}

export default AuthAPI;
