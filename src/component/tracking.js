// src/components/OrderTracking.js
import React, { useEffect, useState } from 'react';
import { fetchOrderTracking, addOrderTracking, updateOrderTracking, deleteOrderTracking } from '../apiService';

const OrderTracking = () => {
    const [trackings, setTrackings] = useState([]);
    const [newTracking, setNewTracking] = useState({ order_id: '', current_location: '', estimated_arrival: '' });

    useEffect(() => {
        loadTrackings();
    }, []);

    const loadTrackings = async () => {
        const response = await fetchOrderTracking();
        setTrackings(response.data);
    };

    const handleAddTracking = async () => {
        await addOrderTracking(newTracking);
        loadTrackings();
    };

    const handleUpdateTracking = async (id, tracking) => {
        await updateOrderTracking(id, tracking);
        loadTrackings();
    };

    const handleDeleteTracking = async (id) => {
        await deleteOrderTracking(id);
        loadTrackings();
    };

    return (
        <div>
            <h1>Order Tracking</h1>
            <div>
                <input
                    type="text"
                    placeholder="Order ID"
                    value={newTracking.order_id}
                    onChange={(e) => setNewTracking({ ...newTracking, order_id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Current Location"
                    value={newTracking.current_location}
                    onChange={(e) => setNewTracking({ ...newTracking, current_location: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Estimated Arrival"
                    value={newTracking.estimated_arrival}
                    onChange={(e) => setNewTracking({ ...newTracking, estimated_arrival: e.target.value })}
                />
                <button onClick={handleAddTracking}>Add Tracking</button>
            </div>
            <ul>
                {trackings.map((tracking) => (
                    <li key={tracking.id}>
                        Order ID: {tracking.order_id} - Location: {tracking.current_location} - Estimated Arrival: {tracking.estimated_arrival}
                        <button onClick={() => handleUpdateTracking(tracking.id, { ...tracking, current_location: 'Updated Location' })}>Update</button>
                        <button onClick={() => handleDeleteTracking(tracking.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderTracking;
