import React from 'react';
import '../../assets/css/login.scss';

const LoginLayout = ({ children }: { children: any }) => {
    return (
        <div className="outer-login-wrapper row">
            <div className="col-sm-4 d-none d-sm-block login-left"></div>
            <div className="col-sm-8 login-right">{children}</div>
        </div>
    );
}

export default LoginLayout;