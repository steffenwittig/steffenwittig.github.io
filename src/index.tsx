import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/theme.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
