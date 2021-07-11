import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});