import React from 'react'
import {About,Events,Footer,Landing,Navbar,Registeration,Schedule,Sponsers} from "../components"
const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Landing />
        <About />
        <Events />
        {/* <Registeration /> */}
        {/*<Sponsers />*/}
        <Schedule />
        <Sponsers />
        <Footer />
    </div>
  )
}

export default LandingPage