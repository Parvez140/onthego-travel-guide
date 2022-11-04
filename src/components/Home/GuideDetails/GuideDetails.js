import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const GuideDetails = () => {
    const  {serviceId}   = useParams();
    return (
        <div>
            <h1>Guide Details {serviceId}</h1>
            <Button  as={Link} to='/chekOut'>ChekOut</Button>
            <Link to="/checkOut">
            <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
        </div>
    );
};

export default GuideDetails;