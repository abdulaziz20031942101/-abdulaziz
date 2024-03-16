import React from 'react'

// companints 
import Navbar from "../component/Navbar"
import Header from '../component/Header'
import Social from "../component/Social"
import Skils from "../component/Skils"
import Works from "../component/Works"
import Contact from "../component/Contact"
import Inputs from "../component/inputs"


const main = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Social/>
        <Skils/>
        <Works/>
        <Contact/>
        <Inputs/>
        
    </div>
  )
}

export default main