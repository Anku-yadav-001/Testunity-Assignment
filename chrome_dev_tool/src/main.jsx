import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NetworkProvider } from './context/NetworkContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NetworkProvider>

        <App />
    </NetworkProvider>
)
