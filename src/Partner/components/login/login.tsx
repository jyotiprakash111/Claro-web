import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, matchPath, useHistory } from 'react-router-dom';
import '../../assets/css/login.scss';
import GoogleIcon from '../../assets/img/google.svg';
import LoginLayout from "../login-layout/login-layout";
import ErrorModal from '../shared/modal';
import ClarooSpinner from '../shared/spinner';
import PasswordInput from '../shared/password-mask';
import { LoginSchema } from './constants';
import { LoginData } from './types';
import user from '../shared/user';

const Login = (props: any) => {
    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [invalidLogin, setInvalidLogin] = useState<boolean>(false);
    // const [unverifedCredentials] = useState<boolean>(false);
    const [isPartner] = useState<boolean>(matchPath(props.location.pathname, '/customer/login') ? false : true);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(LoginSchema)
    });
    const endPoint = isPartner ? '/store' : '/customer'
    const onLogin = async (data: LoginData) => {
        setInvalidLogin(false);
        try {
            setLoading(true);
            await user.login(endPoint, data);
            if (isPartner) {
                history.push(`${endPoint}/business-info`);
            } else {
                history.push(`${endPoint}/dashboard`);
            }
        } catch (err) {
            const status = err.response.status;
            if (status === 401) {
                setInvalidLogin(true);
            }
            setLoading(false);
        }
    }
    return (
        <LoginLayout>
            {loading ? <ClarooSpinner /> : null}
            <div className="login-wrapper">
                <div className="login-header">
                    <p className="">We're <span className="highlighter"><span>so happy</span></span> to <br />see you again!</p>
                </div>
                <form onSubmit={handleSubmit(onLogin)} noValidate className="form-signin">
                    <p className="title">Login</p>
                    <p className="form-label">Email address</p>
                    <input ref={register} name='email' type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Email address" />
                    <p className="form-label mt-5">Password</p>
                    <PasswordInput fieldName='password' hasError={errors.password} register={register} />
                    {/* {unverifedCredentials ? <p className="errortext">Please verify your email address. <a href="#">Click here</a> to send again.</p> : null} */}
                    {invalidLogin ? <p className="errortext">Email ID and password do not match.</p> : null}
                    <Link to={`${endPoint}/forgot-password`} className="forgot-password mt-3">Forgot password</Link>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary login-btn">Log in</button>
                    </div>
                </form>
                <div className="saperator">
                    <span className="line"></span>
                    <span className="or">or</span>
                    <span className="line"></span>
                </div>
                <div className="google-login text-center">
                    <button type="button" className="btn google-login-btn">
                        <img src={GoogleIcon} alt="google signup" />
                                Login using Google</button>
                    <p>First time here? <Link to={`${endPoint}/signup`}>Sign up</Link></p>
                    <div className="login-option">
                        {isPartner ? <p>Are you one of our super cool bookers?</p> : <p>Are you one of our amazing partners?</p>}
                        <Link to={`${isPartner ? '/customer' : '/store'}/login`}>Click here to login then!</Link>
                    </div>
                </div>
            </div>
            <ErrorModal show={error} handleClose={() => setError(false)} heading='Login Error' errror='Please try again..' />
        </LoginLayout>
    );
}

export default Login;