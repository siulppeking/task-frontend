import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskApp } from './TaskApp';


import './bootstrap/minty.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskApp />
  </React.StrictMode>,
)
