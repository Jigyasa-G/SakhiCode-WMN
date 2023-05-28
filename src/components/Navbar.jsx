import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const jump = (target) => {
        const violation = document.getElementById(target);
        window.scrollTo({
            top:violation.offsetTop,
            behavior:"smooth"
        });
    };

    return (
      <nav className="fixed top-0 left-0 right-0 bg-[#c5559e] px-12 py-3 flex justify-between items-center z-10">
          <img src={require('../assets/mwslogo.jpg')} alt="Logo" className="text-[#E5F2FF] font-medium h-20 border-2" />

          <div className="flex hidden md:block">
              <a href="#" onClick={() => {jump("landing")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">Home</a>
              <a href="#" onClick={() => {window.open('https://networkshalajg.web.app/', '_blank');}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">Jobs</a>
              <a href="#" onClick={() => {jump("event")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">Learn</a>
              <a href="#" onClick={() => {jump("schedule")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">NGO Connect</a>
              <a href="#" onClick={() => {jump("sponsors")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">Donate</a>
            </div>

          <button className="text-[#E5F2FF] font-medium text-2xl focus:outline-none sm:hidden" onClick={() => setIsOpen(!isOpen)}>
              <img src={require('../assets/icons8-chevron-48.png')} alt="Logo" className="h-10" />
          </button>
          <div className={`${ isOpen ? "block" : "hidden" } sm:hidden absolute top-24 left-0 right-0 bg-[#071E22] text-center border-2 rounded-lg pb-4`}>
              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("landing");
              }}>Home</a>

              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("about");
              }}>About</a>

              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-2" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("event");
              }}>Events</a>

              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("schedule");
              }}>NGO Connect</a>

              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("sponsors");
              }}>Sponsors</a>
          </div>
      </nav>
  )
}

export default Navbar