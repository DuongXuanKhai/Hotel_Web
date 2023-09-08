import React from 'react'
import './App.css'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hotel from './pages/Hotel/Hotel'
import TourCard from './Components/TourCard/TourCard'
import List from './pages/List/List'
import HotelDetail from './Components/HotelDetail/HotelDetail'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/find/:id" element={<HotelDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
