import React from 'react'
import NavBar from './components/NavBar/NavBar'
import DashBoard from './components/DashBoard/DashBoard'
import './App.css'
import Profile from './components/Profile/Profile'
import { Routes, Route } from "react-router-dom"
import Wallet from './components/Wallet/Wallet'
import CardsCarrousel from './components/CreditCards/CardsCarrousel'

export const u = 12

function App() {
  return (
    <div className="father-app">
      <NavBar />
      <Routes>
        <Route key={0} path="/" element={ [<DashBoard />, <Profile />] } />
        <Route key={1} path="/Home" element={ [<DashBoard />, <Profile />] } />
        <Route key={2} path="/Wallet" element={ <Wallet /> } />
        <Route key={3} path="/ReCredit" element={ <CardsCarrousel /> } />
      </Routes>
    </div>
  )
}

export default App