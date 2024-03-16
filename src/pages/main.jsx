import React from 'react'

// companints 
import Navbar from "../component/Navbar"
import Header from '../component/Header'
import Social from "../component/Social"
import Skils from "../component/Skils"
import Works from "../component/Works"


const main = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Social/>
        <Skils/>
        <Works/>
        
    </div>
  )
}

export default main