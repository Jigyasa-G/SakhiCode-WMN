import React from 'react'

const Events = () => {

  return (
      <div style={{backgroundColor: "#071E22"}} id="event">
          <h1 className="font-bold text-center text-5xl p-8" style={{color:'#E5F2FF'}}>Upskillx</h1>
          <div className="grid sm:grid-cols-4 grid-cols-1">

            <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative"  style={{backgroundColor: "#E5F2FF"}}>
                <img className="w-3/4 mx-8 my-4" src="assets/event1.jpeg" alt="Event1"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-lg mb-2">Code Game</div>
                    <p className="text-gray-700 text-base text-sm">
                        A global competitive game to get your acquianted with the world of programming.
                    </p>
                </div>
                <br/><br/>
                <div className="px-6 absolute bottom-5">
                    <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {window.open("https://www.codingame.com/ide/puzzle/onboarding");}} style={{backgroundColor: "#071E22"}}>
                        Try out now!
                    </button>
                </div>
            </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event2.jpeg" alt="Event2"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">Finance Funda</div>
                      <p className="text-gray-700 text-base text-sm">
                        Time is Money. Learn some life-changing money hacks with the legendary game Cashflow to learn the power of investing.
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {window.open("https://moneybhai.moneycontrol.com/");}}  style={{backgroundColor: "#071E22"}}>
                      Try out now!
                      </button>
                  </div>
              </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event3.jpeg" alt="Event3"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">Health & Hygiene</div>
                      <p className="text-gray-700 text-base text-sm">
                         Your mantra to a healthy lifestyle. Adopt better practices for your family.
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {window.open("https://www.who.int/data/gho/data/major-themes/health-and-well-being");}}  style={{backgroundColor: "#071E22"}}>
                      Explore Now !
                      </button>
                  </div>
              </div>

              <div className="w-3/4 max-w-xs h-5/6 m-14 rounded overflow-hidden shadow-lg bg-white relative" style={{backgroundColor: "#E5F2FF"}}>
                  <img className="w-3/4 mx-8 my-4" src="assets/event4.jpeg" alt="Event4"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2">Business & Entrepreneurship</div>
                      <p className="text-gray-700 text-base text-sm">
                          Build your business acumen, give wings to your dream idea. Ideate, Innovate, Inspire! 
                      </p>
                  </div>
                  <br/><br/>
                  <div className="px-6 absolute bottom-5">
                      <button className="text-white font-medium py-2 px-4 rounded-lg" onClick={() => {window.open(" https://www.richdad.com/classic");}}  style={{backgroundColor: "#071E22"}}>
                      Try out now!
                      </button>
                  </div>
              </div>

              </div>
        </div>
    );
}

export default Events