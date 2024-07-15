// src/components/InventoryItems.js
import React, { useEffect, useState } from 'react';
import { fetchInventoryItems, addInventoryItem, updateInventoryItem, deleteInventoryItem } from '../apiService';

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ shop_id: '', item_name: '', quantity: '', cost_price: '', sale_price: '', description: '', image_url: '' });

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const response = await fetchInventoryItems();
        setItems(response.data);
    };

    const handleAddItem = async () => {
        await addInventoryItem(newItem);
        loadItems();
    };

    const handleUpdateItem = async (id, item) => {
        await updateInventoryItem(id, item);
        loadItems();
    };

    const handleDeleteItem = async (id) => {
        await deleteInventoryItem(id);
        loadItems();
    };

    return (
        <div>
            <h1>Inventory Items</h1>
            <div>
                <input
                    type="text"
                    placeholder="Shop ID"
                    value={newItem.shop_id}
                    onChange={(e) => setNewItem({ ...newItem, shop_id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Item Name"
                    value={newItem.item_name}
                    onChange={(e) => setNewItem({ ...newItem, item_name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Quantity"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Cost Price"
                    value={newItem.cost_price}
                    onChange={(e) => setNewItem({ ...newItem, cost_price: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Sale Price"
                    value={newItem.sale_price}
                    onChange={(e) => setNewItem({ ...newItem, sale_price: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newItem.image_url}
                    onChange={(e) => setNewItem({ ...newItem, image_url: e.target.value })}
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
            <ul>
                {items.map(item => (
                    <li key={item.item_id}>
                        {item.item_name} - {item.quantity} - {item.cost_price} - {item.sale_price} - {item.description} - {item.image_url}
                        <button onClick={() => handleUpdateItem(item.item_id, { ...item, item_name: 'Updated Name' })}>Update</button>
                        <button onClick={() => handleDeleteItem(item.item_id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryItems;
