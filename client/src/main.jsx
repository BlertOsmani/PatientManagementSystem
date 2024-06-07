import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-blue/theme.css";
import "/node_modules/primeflex/primeflex.css";               // PrimeReact CSS
import "primeicons/primeicons.css";   

const value = {
  ripple: true,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider value={value}>
        <App />
    </PrimeReactProvider>
  </React.StrictMode>,
)
