import { AxiosError } from "axios";

export enum ErrorType {
    ServerError,
    Unauthorized
}

export const ErrorHandler = (error: AxiosError) => {
    const status = error.response?.status || 200;
    if (status >= 400 && status <= 500) {
    } else if (status >= 500 && status <= 600) {
    }
}