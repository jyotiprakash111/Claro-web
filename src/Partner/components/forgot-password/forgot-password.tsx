import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, matchPath } from 'react-router-dom';
import LoginLayout from '../login-layout/login-layout';
import ClarooSpinner from '../shared/spinner';
import * as yup from "yup";
import axios from 'axios';
import { AppConfig } from '../../config';

export const ForgotPasswordSchema = yup.object().shape({
    email: yup.string().required()
});

const ForgotPassword = (props: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [userDoesntExist, setUserExistError] = useState<boolean>(false);
    const [isPartner] = useState<boolean>(matchPath(props.location.pathname, '/customer/signup') ? false : true);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(ForgotPasswordSchema)
    });
    const endPoint = isPartner ? '/store' : '/customer'
    const sendPasswordRecoveryMail = async (data: { email: string }) => {
        try {
            setLoading(true);
            await axios.post(`${AppConfig.baseURL}/auth/forgot-password${endPoint}`, data);
            setSuccess(true);
        } catch (err) {
            setUserExistError(true);
        } finally {
            setLoading(false);
        }
    }
    return <LoginLayout>
        {loading ? <ClarooSpinner /> : null}
        <div className="login-wrapper">
            {!success ?
                <form onSubmit={handleSubmit(sendPasswordRecoveryMail)} noValidate className="form-signin">
                    <p className="title">Recover password</p>
                    <div className="mt-5">
                        <p className="form-label">Email address</p>
                        <input ref={register} name='email' type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Email address" />
                        {userDoesntExist ? <p className="errortext">Email id is not registered with us. Please signup . <Link to={`${endPoint}/signup`}>Click here to signup !</Link></p> : null}
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary login-btn">Submit</button>
                    </div>
                    <div className="text-center mt-4">
                        <div className="login-option">
                            <Link to={`${endPoint}/login`}>Click here to login</Link>
                        </div>
                    </div>
                </form>
                : <div className="text-center mt-4">
                    <div className="login-option">
                        <Link to={`${endPoint}/login`}>Verification email has been sent. Please click here to login</Link>
                    </div>
                </div>
            }
        </div>
    </LoginLayout>
}

export default ForgotPassword;