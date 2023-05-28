import React from 'react'
const About = () => {
  const handleClick = (filename) => {
    window.open('https://networkshalajg.web.app/', '_blank');
    };

  return (
    <div id="about">
      <section class="bg-background text-fontcolor body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <br/>
              <h1 className="font-bold mb-8 text-5xl" style={{color:'#E5F2FF'}}>Welcome to Networkshala !</h1>
              <p className="mb-8 leading-relaxed text-justify">Welcome to our one-stop solution designed exclusively for women. 
              Here, you can connect with like-minded women from around the world, fostering meaningful connections and building a supportive network. 
              Discover exciting job opportunities tailored to your skills and ambitions. Take advantage of our unique upskilling platform that combines
               education with fun and engaging games, helping you develop new skills while having a great time. Share your life updates, experiences, 
               and accomplishments with a community that celebrates your journey. Looking for a travel partner? Connect with fellow adventurers and 
               explore the world together. Host and attend parties, events, and workshops to nurture your social life. Our platform offers a comprehensive
                suite of services and features, empowering women to thrive in all aspects of life. Join us today and unlock endless possibilities!
              </p>

              <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={handleClick}  style={{backgroundColor: "#d496d6"}}>
                      Network With People
                      </button>
              </div>

            <div className="flex justify-center">
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img alt="Poster1" src={require('../assets/Poster1.png')}></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About