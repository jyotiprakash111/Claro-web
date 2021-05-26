import axios from "axios";
import { AppConfig } from "../../config";

class User {
    constructor() {
        this.checkAuth();
    }
    private _authenticated: boolean = false;
    get authenticated() {
        return this._authenticated;
    }
    set authenticated(authenticated: boolean) {
        this._authenticated = authenticated;
    }
    checkAuth = async () => {
        try {
            await axios.post('/user/validate', {}, {
                baseURL: `${AppConfig.baseURL}/auth`
            });
            this._authenticated = true;
        } catch (err) {
            this._authenticated = false
        }
    }
    login = async (endPoint: string, data: any) => {
        try {
            await axios.post(`/login${endPoint}`, data, {
                baseURL: `${AppConfig.baseURL}/auth`
            });
            this.authenticated = true;
        } catch (err) {
            this.authenticated = false;
            throw err;
        }
    }
    signup = async (endPoint: string, data: any) => {
        try {
            await axios.post(`${endPoint}/signup`, data, {
                baseURL: `${AppConfig.baseURL}/auth`
            });
            this.authenticated = true;
        } catch (err) {
            this.authenticated = false;
            throw err;
        }
    }
    logout = () => {
        this.authenticated = false;
    }
}

export default new User();