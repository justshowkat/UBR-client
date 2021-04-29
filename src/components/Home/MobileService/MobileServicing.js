import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './MobileServicing.css'

const MobileServicing = () => {
    return (
        <div id='emergency-service' className='mobile-service-container'>
            <div className="container">
                <h1>We provide Emergency assistance Services</h1>
                <h3 className='exception'>Is your bike broken in the middle of the road?</h3>
                <h2>Give us a call, and our mobile servicing team will be there in a minute!!</h2>
                <Button variant='success' > <FontAwesomeIcon icon={faPhoneAlt} /> Call us now</Button>
            </div>
        </div>
    );
};

export default MobileServicing;