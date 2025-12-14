import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import { UserProvider } from '../context/UserContext'
import Explore from './pages/Explore'
import HeroSection from './components/HeroSection'


function App() {

  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />}> </Route>
          <Route path="/explore" element={<Explore/>}></Route>
         
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
