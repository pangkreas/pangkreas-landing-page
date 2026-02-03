
import React from 'react';
import './styles/globals.css';
import { Router } from './app/router';

/**
 * App Component
 * 
 * The central component of the React application. 
 * Its primary responsibility is to orchestrate global providers (auth, theme, query)
 * and mount the main routing system.
 */
export default function App() {
  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
}
