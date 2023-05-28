import React from 'react'

const Footer = () => {

    const handleCopy = () => {
        navigator.clipboard.writeText("ise.genesis.dsce@gmail.com");
    };
  return (
      <div className="bg-[#071E22] mt-1" id='contact'>
          <h1 className="font-bold text-center text-5xl p-8" style={{color:'#E5F2FF'}}>Contact Us</h1>
          <footer className="text-center text-white bg-[#071E22] sm:px-[20%] px-[10%]">
              <div className="container pt-9 flex justify-center mb-9">
                  <a href="https://instagram.com/SakhiCode" target="_blank" className="mr-9">
                      <img src={require('../assets/instagram.png')} alt="Logo" className="h-14" />
                  </a>
                  <a href="https://www.linkedin.com/sakhiCode/" target="_blank" className="mr-9">
                      <img src={require('../assets/linkedin.png')} alt="Logo" className="h-14" />
                  </a>
                  <a href="mailto:sakhicode@gmail.com" target="_blank" onClick={handleCopy} className="text-gray-800">
                      <img src={require('../assets/email.png')} alt="Logo" className="h-14" />
                  </a>
              </div>

              <div className="text-center py-4 text-[#E5F2FF] text-xl">
                  +(91) 9876543821 | +(91) 7891234560
              </div>

              <div className="text-center py-4 text-[#E5F2FF]">
                  Copyright © 2023 All rights reserved | Made by SakhiCode.
              </div>
          </footer>
      </div>
  )
}

export default Footer