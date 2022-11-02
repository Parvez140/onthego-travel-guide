import React from 'react';
import { useParams } from 'react-router-dom';

const ChekOut = () => {
    const  serviceId   = useParams();
    return (
        <div>
            <h1>ChekOut Section {serviceId}</h1>
        </div>
    );
};

export default ChekOut;