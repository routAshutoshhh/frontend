// src/components/Users.js
import React, { useEffect, useState } from 'react';
import { fetchUsers, addUser, updateUser, deleteUser } from '../apiService';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', phonenumber: '', dateofbirth: '' });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const response = await fetchUsers();
        setUsers(response.data);
    };

    const handleAddUser = async () => {
        await addUser(newUser);
        loadUsers();
    };

    const handleUpdateUser = async (id, user) => {
        await updateUser(id, user);
        loadUsers();
    };

    const handleDeleteUser = async (id) => {
        await deleteUser(id);
        loadUsers();
    };

    return (
        <div>
            <h1>Users</h1>
            <div>
                <input type="text" placeholder="Name" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <input type="email" placeholder="Email" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <input type="password" placeholder="Password" onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                <input type="text" placeholder="Phone Number" onChange={(e) => setNewUser({ ...newUser, phonenumber: e.target.value })} />
                <input type="date" placeholder="Date of Birth" onChange={(e) => setNewUser({ ...newUser, dateofbirth: e.target.value })} />
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleUpdateUser(user.id, { ...user, name: 'Updated Name' })}>Update</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
