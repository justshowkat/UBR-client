import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Home/Services/ServiceCard/ServiceCard';
import './ManageService.css'

const ManageService = () => {
    const [allServicesData,  setAllServicesData] = useState([])

    useEffect(() => {
      fetch('https://ubr-bike-repair.herokuapp.com/all-services')
      .then(res => res.json())
      .then(data => setAllServicesData(data))
    }, [])
    return (
        <div className='container manage-service-container'>
            {allServicesData.map(service => <ServiceCard service={service} manageService={true}></ServiceCard>)}
        </div>
    );
};

export default ManageService;