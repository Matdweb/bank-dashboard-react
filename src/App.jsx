import React from 'react'
import NavBar from './components/NavBar/NavBar'
import DashBoard from './components/DashBoard/DashBoard'
import './App.css'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className="father-app">
      <NavBar />
      <DashBoard />
      <Profile />
    </div>
  )
}

export default App