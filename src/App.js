import React from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import user from './components/user'; // Corrected import path and component name
import ServiceProvider from './components/serviceProvider'; // Corrected import path and component name
import Shop from './components/shop'; // Corrected import path and component name
import Order from './components/order'; // Corrected import path and component name
import Tracking from './components/tracking'; // Corrected import path and component name
import Item from './components/item'; // Corrected import path and component name
import CartItem from './components/cartItem'; // Corrected import path and component name

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-content">
        <user /> {/* Corrected component name */}
        <ServiceProvider /> {/* Corrected component name */}
        <Shop /> {/* Corrected component name */}
        <Item /> {/* Corrected component name */}
        <CartItem /> {/* Corrected component name */}
        <Order /> {/* Corrected component name */}
        <Tracking /> {/* Corrected component name */}
      </div>
    </div>
  );
}

export default App;
