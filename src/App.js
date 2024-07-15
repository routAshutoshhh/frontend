import React from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import user from "./component/user"; // Corrected import path and component name
import ServiceProvider from "./component/serviceProviders"; // Corrected import path and component name
import Shop from "./component/shop"; // Corrected import path and component name
import Order from "./component/order"; // Corrected import path and component name
import Tracking from "./component/tracking"; // Corrected import path and component name
import Item from "./component/item"; // Corrected import path and component name
import CartItem from "./component/cartItem"; // Corrected import path and component name

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://cdn.pixabay.com/photo/2024/01/28/16/17/ai-generated-8537858_1280.png"
          }
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
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
