import React from 'react';
import { Spinner as BSSpinner } from 'react-bootstrap';
import "./../../assets/css/spinner.scss";
const ClarooSpinner = () => {
    return <div className='spinner-container'><BSSpinner animation="border" /></div>
}

export default ClarooSpinner;