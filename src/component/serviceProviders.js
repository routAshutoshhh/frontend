// src/components/ServiceProviders.js
import React, { useEffect, useState } from 'react';
import { fetchServiceProviders, addServiceProvider, updateServiceProvider, deleteServiceProvider } from '../apiService';

const ServiceProviders = () => {
    const [serviceProviders, setServiceProviders] = useState([]);
    const [newServiceProvider, setNewServiceProvider] = useState({
        name: '',
        service_industry: '',
        company_name: '',
        phone_number: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        loadServiceProviders();
    }, []);

    const loadServiceProviders = async () => {
        const response = await fetchServiceProviders();
        setServiceProviders(response.data);
    };

    const handleAddServiceProvider = async () => {
        await addServiceProvider(newServiceProvider);
        loadServiceProviders();
    };

    const handleUpdateServiceProvider = async (id, serviceProvider) => {
        await updateServiceProvider(id, serviceProvider);
        loadServiceProviders();
    };

    const handleDeleteServiceProvider = async (id) => {
        await deleteServiceProvider(id);
        loadServiceProviders();
    };

    return (
        <div>
            <h1>Service Providers</h1>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={newServiceProvider.name}
                    onChange={(e) => setNewServiceProvider({ ...newServiceProvider, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Service Industry"
                    value={newServiceProvider.service_industry}
                    onChange={(e) => setNewServiceProvider({ ...newServiceProvider, service_industry: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Company Name"
                    value={newServiceProvider.company_name}
                    onChange={(e) => setNewServiceProvider({ ...newServiceProvider, company_name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={newServiceProvider.phone_number}
                    onChange={(e) => setNewServiceProvider({ ...newServiceProvider, phone_number: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newServiceProvider.email}
                    onChange={(e) => setNewServiceProvider({ ...newServiceProvider, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={newServiceProvider.password}
                    onChange={(e) => setNewServiceProvider({ ...newServiceProvider, password: e.target.value })}
                />
                <button onClick={handleAddServiceProvider}>Add Service Provider</button>
            </div>
            <ul>
                {serviceProviders.map((serviceProvider) => (
                    <li key={serviceProvider.id}>
                        {serviceProvider.name} - {serviceProvider.service_industry} - {serviceProvider.company_name} - {serviceProvider.phone_number} - {serviceProvider.email}
                        <button onClick={() => handleUpdateServiceProvider(serviceProvider.id, { ...serviceProvider, name: 'Updated Name' })}>Update</button>
                        <button onClick={() => handleDeleteServiceProvider(serviceProvider.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceProviders;
