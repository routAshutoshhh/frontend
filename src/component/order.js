// src/components/Orders.js
import React, { useEffect, useState } from 'react';
import { fetchOrders, addOrder, updateOrder, deleteOrder } from '../apiService';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState({ user_id: '', item_id: '', quantity: '' });

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        const response = await fetchOrders();
        setOrders(response.data);
    };

    const handleAddOrder = async () => {
        await addOrder(newOrder);
        loadOrders();
    };

    const handleUpdateOrder = async (id, order) => {
        await updateOrder(id, order);
        loadOrders();
    };

    const handleDeleteOrder = async (id) => {
        await deleteOrder(id);
        loadOrders();
    };

    return (
        <div>
            <h1>Orders</h1>
            <div>
                <input
                    type="text"
                    placeholder="User ID"
                    value={newOrder.user_id}
                    onChange={(e) => setNewOrder({ ...newOrder, user_id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Item ID"
                    value={newOrder.item_id}
                    onChange={(e) => setNewOrder({ ...newOrder, item_id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Quantity"
                    value={newOrder.quantity}
                    onChange={(e) => setNewOrder({ ...newOrder, quantity: e.target.value })}
                />
                <button onClick={handleAddOrder}>Add Order</button>
            </div>
            <ul>
                {orders.map((order) => (
                    <li key={order.purchase_id}>
                        User ID: {order.user_id} - Item ID: {order.item_id} - Quantity: {order.quantity} - Date: {order.purchase_date}
                        <button onClick={() => handleUpdateOrder(order.purchase_id, { ...order, quantity: 'Updated Quantity' })}>Update</button>
                        <button onClick={() => handleDeleteOrder(order.purchase_id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
