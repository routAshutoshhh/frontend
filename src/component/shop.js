// src/components/StationaryShops.js
import React, { useEffect, useState } from 'react';
import { fetchStationaryShops, addStationaryShop, updateStationaryShop, deleteStationaryShop } from '../apiService';

const StationaryShops = () => {
    const [shops, setShops] = useState([]);
    const [newShop, setNewShop] = useState({ shop_name: '', owner_name: '', address: '', contact_number: '', email: '' });

    useEffect(() => {
        loadShops();
    }, []);

    const loadShops = async () => {
        const response = await fetchStationaryShops();
        setShops(response.data);
    };

    const handleAddShop = async () => {
        await addStationaryShop(newShop);
        loadShops();
    };

    const handleUpdateShop = async (id, shop) => {
        await updateStationaryShop(id, shop);
        loadShops();
    };

    const handleDeleteShop = async (id) => {
        await deleteStationaryShop(id);
        loadShops();
    };

    return (
        <div>
            <h1>Stationary Shops</h1>
            <div>
                <input
                    type="text"
                    placeholder="Shop Name"
                    value={newShop.shop_name}
                    onChange={(e) => setNewShop({ ...newShop, shop_name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Owner Name"
                    value={newShop.owner_name}
                    onChange={(e) => setNewShop({ ...newShop, owner_name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={newShop.address}
                    onChange={(e) => setNewShop({ ...newShop, address: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Contact Number"
                    value={newShop.contact_number}
                    onChange={(e) => setNewShop({ ...newShop, contact_number: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={newShop.email}
                    onChange={(e) => setNewShop({ ...newShop, email: e.target.value })}
                />
                <button onClick={handleAddShop}>Add Shop</button>
            </div>
            <ul>
                {shops.map(shop => (
                    <li key={shop.shop_id}>
                        {shop.shop_name} - {shop.owner_name} - {shop.address} - {shop.contact_number} - {shop.email}
                        <button onClick={() => handleUpdateShop(shop.shop_id, { ...shop, shop_name: 'Updated Name' })}>Update</button>
                        <button onClick={() => handleDeleteShop(shop.shop_id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StationaryShops;
