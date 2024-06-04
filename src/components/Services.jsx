import React, { useEffect, useState } from 'react';
import servicesData from "../services.json"
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/services')
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="mb-32 container">
      <div className="text-center space-y-5 md:w-1/2 mx-auto mb-12">
        <h5 className="text-xl text-red-600 font-bold">Service</h5>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="text-gray-500">
        the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            />)
        }
      </div>
    </div>
  );
};

export default Services;