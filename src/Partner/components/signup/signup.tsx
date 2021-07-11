import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, matchPath, useHistory } from "react-router-dom";
import '../../assets/css/login.scss';
import arrowDown from '../../assets/img/arrow-down.svg';
import FlagIndia from '../../assets/img/flag-india.png';
import GoogleIcon from '../../assets/img/google.svg';
import LoginLayout from "../login-layout/login-layout";
import ClarooSpinner from "../shared/spinner";
import { SignUpScheme as SignupScheme } from "./constants";
import PasswordInput from "../shared/password-mask";
import { SignupData } from "./types";
import user from "../shared/user";

const Signup = (props: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const history = useHistory();
    const [policyChecked, setPolicyCheck] = useState<boolean>(false);
    const [userExist, setUserExistError] = useState<boolean>(false);
    const [isPartner] = useState<boolean>(matchPath(props.location.pathname, '/customer/signup') ? false : true);
    const { register, handleSubmit, errors, setError } = useForm({
        resolver: yupResolver(SignupScheme)
    });
    const endPoint = isPartner ? '/store' : '/customer'
    const onSignup = async (data: SignupData) => {
        setUserExistError(false);
        try {
            setLoading(true);
            await user.signup(endPoint, data);
            history.push(`${endPoint}/email-verification`);
        } catch (err) {
            const status = err.response.status;
            if (status === 400) {
                setError('email', {
                    shouldFocus: true
                });
                setUserExistError(true);
            }
            setLoading(false);
        }
    }
    return (
        <LoginLayout>
            {loading ? <ClarooSpinner /> : null}
            <div className="login-wrapper">
                <div className="login-header">
                    <p className="">We’re <span className="highlighter"><span>so glad</span></span> that <br />you’re joining us!</p>
                </div>
                <form onSubmit={handleSubmit(onSignup)} noValidate className="form-signin">
                    <p className="title">Create a free Booker’s account</p>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="form-label">First name</p>
                            <input ref={register} name='firstName' type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First name" />
                        </div>
                        <div className="col-sm-6">
                            <p className="form-label">Last name</p>
                            <input ref={register} name='lastName' type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Last name" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="form-label">Email address</p>
                        <input ref={register} name='email' type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Email address" />
                        {userExist ? <p className="errortext">Email id already register. Please login or use different address for signup .</p> : null}
                    </div>
                    <p className="form-label mt-5">Password</p>
                    <PasswordInput fieldName='password' hasError={errors.password} register={register} />
                    <div className="mt-5">
                        <p className="form-label mt-5">Phone number (optional)</p>
                        <div className="phone-number-wrapper">
                            <input ref={register} name='contactNumber' type="text" className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`} placeholder="Contact Number" />
                            <div className="inner-wrapper">
                                <div className="select-country">
                                    <img className="country" src={FlagIndia} alt="country" />
                                    <img className="arrow" src={arrowDown} alt="Show password" />
                                    {/* <ul className="counrty-list">
                                                <li>
                                                    <img className="country" src={FlagIndia} alt="country" />
                                                </li>
                                                <li>
                                                    <img className="country" src={FlagIndia} alt="country" />
                                                </li>
                                                <li>
                                                    <img className="country" src={FlagIndia} alt="country" />
                                                </li>
                                                <li>
                                                    <img className="country" src={FlagIndia} alt="country" />
                                                </li>
                                                <li>
                                                    <img className="country" src={FlagIndia} alt="country" />
                                                </li>
                                            </ul> */}
                                </div>
                                <span className="country-code">+91</span>
                            </div>

                        </div>
                    </div>
                    <div className="mt-5">
                        <label className="form-checkbox">
                            <input onChange={(event) => setPolicyCheck(event.target.checked)} checked={policyChecked} type="checkbox" className="custom-checkbox" /> I agree to the privacy policy, website terms and conditions and partner terms.
                                </label>
                    </div>
                    <div className="text-center mt-4">
                        <button disabled={!policyChecked} type="submit" className="btn btn-primary login-btn">Sign up</button>
                    </div>
                </form>

                <div className="saperator">
                    <span className="line"></span>
                    <span className="or">or</span>
                    <span className="line"></span>
                </div>
                <div className="google-login text-center">
                    <button type="button" className="btn google-login-btn">
                        <img src={GoogleIcon} alt="google signup" />Sign up using Google</button>
                    <p>Already have an account?
                        <Link to={`${endPoint}/login`}>Login</Link></p>
                    <div className="login-option">
                        {isPartner ? <p>Are you one of our super cool bookers?</p> : <p>Are you one of our amazing partners?</p>}
                        <Link to={`${isPartner ? '/customer' : '/store'}/signup`}>Click here to sign up then!</Link>
                    </div>
                </div>
            </div>
        </LoginLayout>
    );
}

export default Signup;