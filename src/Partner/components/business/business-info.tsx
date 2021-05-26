import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ReactSelect from 'react-select';
import LoginLayout from '../login-layout/login-layout';
import { BusinessInfoSchema } from './constants';

const BusinessInfo = () => {
    const history = useHistory();
    const options = [
        { value: 'Yoga', label: 'Yoga' },
        { value: 'strawberry', label: 'Dance School' },
        { value: 'vanilla', label: 'Art Studio' }
    ]
    const { register, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(BusinessInfoSchema)
    });
    const setupBusinessInfo = (data: {
        businessName: string;
        businessTypeId: string;
    }) => {
        history.push(`/store/business-info-step2`);
    }
    return (
        <LoginLayout>
            <div className="login-wrapper email-verification">
                <div className="login-header">
                    <p className="">Welcome, John!</p>
                    <div className="description">We need a bit more information before we go into creating your classes!</div>
                </div>
                <form onSubmit={handleSubmit(setupBusinessInfo)} className="form-signin">
                    <p className="title">Business information</p>
                    <div>
                        <p className="form-label">Name of your business</p>
                        <input ref={register} name='businessName' type="text" className={`form-control ${errors.businessName ? 'is-invalid' : ''}`} placeholder="Business name" />
                    </div>
                    <div className="mt-5">
                        <p className="form-label">Type of business</p>
                        <Controller
                            as={ReactSelect}
                            options={options}
                            name="ReactSelect"
                            isClearable
                            control={control}
                        />
                    </div>
                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary login-btn">Next step</button>
                    </div>
                </form>
            </div>
        </LoginLayout>
    );
}

export default BusinessInfo;