import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './ components/pages/Home'
import Compartilhe from './ components/pages/Compartilhe'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compartilhe" element={<Compartilhe />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
