import React, { useState } from 'react';
import { Link, matchPath } from 'react-router-dom';
import '../../assets/css/login.scss';
import LoginLayout from "../login-layout/login-layout";

const EmailVerification = (props: any) => {
    const [isPartner] = useState<boolean>(matchPath(props.location.pathname, '/customer/email-verification') ? false : true);
    const endPoint = isPartner ? '/store' : '/customer'
    return (
        <LoginLayout>
            <div className="login-wrapper email-verification">
                <div className="login-header">
                    <p className="">Thank you for signing <br />up. <span className="highlighter"><span>You've got mail!</span></span></p>
                </div>
                <div className="verification-message">
                    <div className="flex">
                        <div className="message-icon"></div>
                        <div className="title">We have sent a verification email to your account.</div>
                    </div>
                    <p className="message">Please click on the link that has been just sent to your email address to verify your account, and continue with the rest of the registration process.</p>
                </div>
                <div className="google-login text-center">
                    <p>First time here? <Link to={`${endPoint}/signup`}>Sign up</Link></p>
                    <div className="login-option">
                        {isPartner ? <p>Are you one of our super cool bookers?</p> : <p>Are you one of our amazing partners?</p>}
                        <Link to={`${endPoint}/login`}>Click here to login then!</Link>
                    </div>
                </div>
            </div>
        </LoginLayout>
    );
}

export default EmailVerification;