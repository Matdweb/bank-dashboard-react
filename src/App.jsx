import React from 'react'
import NavBar from './components/NavBar/NavBar'
import DashBoard from './components/DashBoard/DashBoard'
import './App.css'
import Profile from './components/Profile/Profile'
import { Routes, Route } from "react-router-dom"
import Wallet from './components/Wallet/Wallet'

export const u = 12

function App() {
  return (
    <div className="father-app">
      <NavBar />
      <Routes>
        <Route path="/" element={ [<DashBoard />, <Profile />] } />
        <Route path="/Home" element={ [<DashBoard />, <Profile />] } />
        <Route path="/Wallet" element={ <Wallet /> } />
      </Routes>
    </div>
  )
}

export default App