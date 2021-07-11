import * as yup from "yup";

export const SignUpScheme = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    contactNumber: yup.string().required()
});