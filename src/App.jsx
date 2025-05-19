import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import User from './pages/User'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {

  return (
    <>

      <Router>
        <Routes>
          {/* Define a route for the shortened URL */}
          <Route path="/" element={<>
            <Navbar></Navbar>
            <Hero></Hero>
            <Footer></Footer>
          </>} />
          <Route path="/:key" element={<User></User>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
