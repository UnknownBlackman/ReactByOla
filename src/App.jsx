import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import BusinessDetails from './components/BusinessDetails.jsx'
import BusinessDescription from './components/BusinessDescription.jsx'
import ContactDetails from './components/ContactDetails.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <BusinessDetails />
      <BusinessDescription />
      <ContactDetails />
      <Footer />
    </>
  )
}

export default App
