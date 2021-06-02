import React from 'react';
import './Input-label.css';

interface Props {
    label: string;
    value : string;
    onChange ?: React.ChangeEventHandler<HTMLInputElement>
}

const _InputWithLabel = (props: Props) => {

    return (
        <div className='input-label-container' style={{ paddingLeft: '20px', paddingRight: '20px', width: '100%' }}>
            <div style={{  fontSize: '10pt', fontWeight:600 }}>
                {' '}
                {props.label}{' '}
            </div>
            <input
                //onChange={onChange}
                onChange={props.onChange}
                value={props.value}
                className="form-input"
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default _InputWithLabel
