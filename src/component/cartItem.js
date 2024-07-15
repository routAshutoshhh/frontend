// src/components/StatCart.js
import React, { useEffect, useState } from 'react';
import { fetchStatCartItems, addStatCartItem, updateStatCartItem, deleteStatCartItem } from '../apiService';

const StatCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [newCartItem, setNewCartItem] = useState({ consumer_id: '', stationary_item_id: '', quantity: '', image_url: '' });

    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async () => {
        const response = await fetchStatCartItems();
        setCartItems(response.data);
    };

    const handleAddCartItem = async () => {
        await addStatCartItem(newCartItem);
        loadCartItems();
    };

    const handleUpdateCartItem = async (id, cartItem) => {
        await updateStatCartItem(id, cartItem);
        loadCartItems();
    };

    const handleDeleteCartItem = async (id) => {
        await deleteStatCartItem(id);
        loadCartItems();
    };

    return (
        <div>
            <h1>Cart Items</h1>
            <div>
                <input
                    type="text"
                    placeholder="Consumer ID"
                    value={newCartItem.consumer_id}
                    onChange={(e) => setNewCartItem({ ...newCartItem, consumer_id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Stationary Item ID"
                    value={newCartItem.stationary_item_id}
                    onChange={(e) => setNewCartItem({ ...newCartItem, stationary_item_id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Quantity"
                    value={newCartItem.quantity}
                    onChange={(e) => setNewCartItem({ ...newCartItem, quantity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newCartItem.image_url}
                    onChange={(e) => setNewCartItem({ ...newCartItem, image_url: e.target.value })}
                />
                <button onClick={handleAddCartItem}>Add Cart Item</button>
            </div>
            <ul>
                {cartItems.map(cartItem => (
                    <li key={cartItem.id}>
                        Consumer ID: {cartItem.consumer_id} - Item ID: {cartItem.stationary_item_id} - Quantity: {cartItem.quantity} - Image URL: {cartItem.image_url}
                        <button onClick={() => handleUpdateCartItem(cartItem.id, { ...cartItem, quantity: 'Updated Quantity' })}>Update</button>
                        <button onClick={() => handleDeleteCartItem(cartItem.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StatCart;
