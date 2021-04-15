import React, { useState } from "react";
import EyeIcon from '../../assets/img/eye.svg';
const PasswordInput = ({ hasError, register, fieldName }: { register: string | React.RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null | undefined, fieldName: string, hasError: boolean }) => {
    const [showPassword, setPasswordVisible] = useState<boolean>(false);
    return <div className="password-wrapper">{
        showPassword ? <input ref={register} name={fieldName} className={`form-control ${hasError ? 'is-invalid' : ''}`} type="text" placeholder="Password" />
            : <input autoComplete={'false'} ref={register} name={fieldName} className={`form-control ${hasError ? 'is-invalid' : ''}`} type="password" placeholder="Password" />
    }
        <img onClick={() => setPasswordVisible(!showPassword)} src={EyeIcon} alt="Show password" />
    </div>
};

export default PasswordInput;