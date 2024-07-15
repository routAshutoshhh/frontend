// src/apiService.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:11944', // Make sure this matches your server's base URL
});

export const fetchUsers = () => api.get('/users');
export const addUser = (user) => api.post('/users', user);
export const fetchUserById = (id) => api.get(`/users/${id}`);
export const updateUser = (id, user) => api.put(`/users/${id}`, user);
export const deleteUser = (id) => api.delete(`/users/${id}`);

// Service Providers API functions
export const fetchServiceProviders = () => api.get('/service-providers');
export const addServiceProvider = (serviceProvider) => api.post('/service-providers', serviceProvider);
export const fetchServiceProviderById = (id) => api.get(`/service-providers/${id}`);
export const updateServiceProvider = (id, serviceProvider) => api.put(`/service-providers/${id}`, serviceProvider);
export const deleteServiceProvider = (id) => api.delete(`/service-providers/${id}`);

export const fetchStationaryShops = () => api.get('/stationary-shops');
export const addStationaryShop = (shop) => api.post('/stationary-shops', shop);
export const fetchStationaryShopById = (id) => api.get(`/stationary-shops/${id}`);
export const updateStationaryShop = (id, shop) => api.put(`/stationary-shops/${id}`, shop);
export const deleteStationaryShop = (id) => api.delete(`/stationary-shops/${id}`);

export const fetchItems = () => api.get('/stationary-items');
export const addItem = (item) => api.post('/stationary-items', item);
export const fetchItemById = (id) => api.get(`/stationary-items/${id}`);
export const updateItem = (id, item) => api.put(`/stationary-items/${id}`, item);
export const deleteItem = (id) => api.delete(`/stationary-items/${id}`);

export const fetchCartItems = () => api.get('/stat-cart-items');
export const addCartItem = (cartItem) => api.post('/stat-cart-items', cartItem);
export const fetchCartItemById = (id) => api.get(`/stat-cart-items/${id}`);
export const updateCartItem = (id, cartItem) => api.put(`/stat-cart-items/${id}`, cartItem);
export const deleteCartItem = (id) => api.delete(`/stat-cart-items/${id}`);

// Stat Orders API functions
export const fetchOrders = () => api.get('/order-items');
export const addOrder = (order) => api.post('/order-items', order);
export const fetchOrderById = (id) => api.get(`/order-items/${id}`);
export const updateOrder = (id, order) => api.put(`/order-items/${id}`, order);
export const deleteOrder = (id) => api.delete(`/order-items/${id}`);

// Order Tracking API functions
export const fetchOrderTracking = () => api.get('/order-tracking');
export const addOrderTracking = (tracking) => api.post('/order-tracking', tracking);
export const fetchOrderTrackingById = (id) => api.get(`/order-tracking/${id}`);
export const updateOrderTracking = (id, tracking) => api.put(`/order-tracking/${id}`, tracking);
export const deleteOrderTracking = (id) => api.delete(`/order-tracking/${id}`);
