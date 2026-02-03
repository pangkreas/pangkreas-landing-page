
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Application Entry Point
 * 
 * This file initializes the React application by mounting the root component.
 * Located in /src to maintain a clean architecture and reliable pathing.
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Critical Error: Could not find root element to mount the application.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
