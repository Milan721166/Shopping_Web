import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import Footer from './assets/components/Footer'
import Home from './assets/components/Home'
import Offer from './assets/components/Offer'
import OfferSlide from './assets/components/OfferSlide'

function App() {

  return (
    <>
      <NavBar/>
      <div className="main-content">
        <OfferSlide />
        <Offer />
        <Home />
      </div>
      <Footer/>
    </>
  )
}

export default App
