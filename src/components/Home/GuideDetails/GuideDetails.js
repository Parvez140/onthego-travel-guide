import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const GuideDetails = () => {
    const  {serviceId}   = useParams();
    return (
        <div className='text-center'>
            <h1>Guide Details {serviceId}</h1>
            <Button  as={Link} to='/checkOut'>ChekOut</Button>
        </div>
    );
};

export default GuideDetails;