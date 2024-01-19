import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CustomCursorProvider from './context/CustomCursorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomCursorProvider>
      <App />
    </CustomCursorProvider>
  </React.StrictMode>,
)
