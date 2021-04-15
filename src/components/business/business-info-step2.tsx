import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import ReactSelect from 'react-select';
import LoginLayout from '../login-layout/login-layout';
import { AdditionalBusinessInfoSchema } from './constants';

const AdditionalBusinessInfo = () => {
    const history = useHistory();
    const options = [
        { value: 'chocolate', label: 'Online' },
        { value: 'strawberry', label: 'Facebook' },
        { value: 'vanilla', label: 'LinkedIn' }
    ]
    const { register, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(AdditionalBusinessInfoSchema)
    });
    const setupAdditionalBusinessInfo = (data: {
        classType: string;
        tollUsed: string;
        paintPoint: string;
        source: string;
    }) => {
        history.push(`/store/dashboard`);
    }
    return (
        <LoginLayout>
            <div className="login-wrapper email-verification">
                <div className="login-header">
                    <p className="">Tell us a bit more <br />about yourself!</p>
                    <div className="description">This will help us understand you, and thus serve you better!</div>
                </div>
                <form onSubmit={handleSubmit(setupAdditionalBusinessInfo)} className="form-signin">
                    <p className="title">Introduction</p>
                    <div>
                        <p className="form-label">Tell us a bit more about the classes you take.</p>
                        <input ref={register} name='classes' type="text" className={`form-control ${errors.classes ? 'is-invalid' : ''}`} placeholder="Type here" />
                    </div>
                    <div className="mt-4">
                        <p className="form-label">What tools are you currently using to manage your classes?</p>
                        <input ref={register} name='tools' type="text" className={`form-control ${errors.tools ? 'is-invalid' : ''}`} placeholder="Type here" />
                    </div>
                    <div className="mt-4">
                        <p className="form-label">What is the biggest pain point you need help with?</p>
                        <input ref={register} name='painPoints' type="text" className={`form-control ${errors.painPoints ? 'is-invalid' : ''}`} placeholder="Type here" />
                    </div>
                    <div className="mt-4">
                        <p className="form-label">How did you hear about us?</p>
                        <Controller
                            as={ReactSelect}
                            options={options}
                            name="ReactSelect"
                            isClearable
                            control={control}
                        />
                    </div>
                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary login-btn">Go to my dashboard</button>
                        <br />
                        <Link className="skiplink mt-4" to="/store/dashboard">Skip</Link>
                    </div>
                </form>
            </div>
        </LoginLayout>
    );
}

export default AdditionalBusinessInfo;