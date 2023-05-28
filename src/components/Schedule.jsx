import React, { useState } from 'react'

const Schedule = () => {

    const handleClick = (filename) => {
        window.open('https://networkshalajg.web.app/', '_blank');
        };
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleRegister = () => {
        setShowForm(true);
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access the form values via the name, phoneNumber, and selectedOption state variables
        console.log('Name:', name);
        console.log('Phone Number:', phoneNumber);
        console.log('Selected Option:', selectedOption);
        alert('Registration Successful');
    
        window.location.href = 'https://networkshalajg.web.app/'; 
        // Reset form fields and close the form
        setName('');
        setPhoneNumber('');
        setSelectedOption('');
        setShowForm(false);
      };

    return (

<div id='schedule' style={{backgroundColor: "#E5F2FF"}} >
        <div className="py-[7%]" style={{backgroundColor: "#c5559e"}} id='schedule'>

            <h1 className="font-bold text-center text-5xl pb-16" style={{color:'#E5F2FF'}}>Find NGOs</h1>        

            <div className="">

                <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-[13%] my-2" style={{backgroundColor: "#E5F2FF"}}>
                    <button
                        className="w-full text-left p-4"
                        onClick={() => setOpen1(!open1)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                Addicted to Drugs?
                                <br/>
                        <small style={{ fontSize: '0.6em' }}>Click on the Links below</small>
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${open1 ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>

                    <div className={`${open1 ? "block" : "hidden"} p-4`}>
                       <li>
                       <a href='https://www.higherpowerfoundation.in/' className="font-bold"> Higher Power Foundation</a>
                       </li>

                       <li>
                       <a href='http://www.re-lifefoundation.org/'className="font-bold"> Re-Life Foundation</a>
                       </li>

                       <li>
                       <a href='https://rehabs.in/rehabcentre/freedom-foundation/' className="font-bold"> Samruddhi Foundation (Ri)</a>
                       </li>
                    </div>
                </div>
            </div>

            <div className="">

                <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-[13%] my-2" style={{backgroundColor: "#E5F2FF"}}>
                    <button
                        className="w-full text-left p-4"
                        onClick={() => setOpen2(!open2)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                Help for specially-abled woman
                                <br/>
                        <small style={{ fontSize: '0.6em' }}>Click on the Links below</small>   
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${open2 ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div className={`${open2 ? "block" : "hidden"} p-4`}>
                    <li>
                       <a className="font-bold" href='https://give.do/nonprofits/diya-foundation?utm_source=Blog&utm_campaign=InternationalDayOfPersonWithDisabilities&utm_medium=InternationalDayOfPersonWithDisabilities&utm_term=Give&utm_content=blog'> Diya Foundation</a>
                       </li>

                       <li>
                       <a className="font-bold" href='https://www.giveindia.org/nonprofit/sense-international-india?utm_source=Blog&utm_campaign=InternationalDayOfPersonWithDisabilities&utm_medium=InternationalDayOfPersonWithDisabilities&utm_term=Giveindia&utm_content=blog'> Sense International India</a>
                       </li>

                       <li>
                       <a className="font-bold" href='https://www.giveindia.org/nonprofit/samarthanam-trust-for-the-disabled?utm_source=Blog&utm_campaign=InternationalDayOfPersonWithDisabilities&utm_medium=InternationalDayOfPersonWithDisabilities&utm_term=GiveIndia&utm_content=blog'> Samarthanam Trust for the Disabled</a>
                       </li>                    </div>
                </div>
            </div>

            <div className="">

                <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-[13%] my-2" style={{backgroundColor: "#E5F2FF"}}>
                    <button
                        className="w-full text-left p-4"
                        onClick={() => setOpen3(!open3)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                Domestic Abuse sufferer?
                                <br/>
                                <small style={{ fontSize: '0.6em' }}>Click on the Links below</small>

                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${open3 ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div className={`${open3 ? "block" : "hidden"} p-4`}>
                    <li>
                       <a className="font-bold" href='https://give.do/nonprofits/diya-foundation?utm_source=Blog&utm_campaign=InternationalDayOfPersonWithDisabilities&utm_medium=InternationalDayOfPersonWithDisabilities&utm_term=Give&utm_content=blog'> Nari Raksha</a>
                       </li>

                       <li>
                       <a className="font-bold"href='https://www.giveindia.org/nonprofit/sense-international-india?utm_source=Blog&utm_campaign=InternationalDayOfPersonWithDisabilities&utm_medium=InternationalDayOfPersonWithDisabilities&utm_term=Giveindia&utm_content=blog'> Swara Bharat</a>
                       </li>

                       <li>
                       <a className="font-bold" href='https://www.giveindia.org/nonprofit/samarthanam-trust-for-the-disabled?utm_source=Blog&utm_campaign=InternationalDayOfPersonWithDisabilities&utm_medium=InternationalDayOfPersonWithDisabilities&utm_term=GiveIndia&utm_content=blog'> HER Trust</a>
                       </li>    
                       </div>
                </div>
            </div>
            <div className="">

                <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-[13%] my-2" style={{backgroundColor: "#E5F2FF"}}>
                    <button
                        className="w-full text-left p-4"
                        onClick={() => setOpen4(!open4)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                Are you a widow looking for livelihood?
                                <br/>
                        <small style={{ fontSize: '0.6em' }}>Click on the Links below</small>
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${open4 ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div className={`${open4 ? "block" : "hidden"} p-4`}>
                    <li>
                       <a className="font-bold" href='https://www.give.do/nonprofit/maitri-india'> Maitri India</a>
                       </li>  
                       <li>
                       <a className="font-bold" href='https://networkshalajg.web.app/'>Find jobs matching your skill? Visit Networkshala</a>
                       </li>  
                    </div>
                </div>
            </div>
            <br/>
            <div className="flex items-center">
            <button className="text-white font-medium py-2 px-4 rounded-lg " onClick={handleRegister}  style={{backgroundColor: "#000",display: "block", margin: "0 auto"}}>
                      Register Now
            </button>
            </div>
            <br/><br/><br/>

            {/* Registration Form */}
            <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-[13%] my-2 pl-20 pb-8" style={{backgroundColor: handleFormSubmit?'#E5F2FF':'#c5559e'}}>
        {showForm && (
          <form onSubmit={handleFormSubmit}>
            <div className="my-4">
              <label htmlFor="name" className="text-lg font-medium pr-10">
                Your Name :
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md p-2 mt-1 w-3/4"
                required
                placeholder='Enter Full Name'
              />
            </div>

            <div className="my-4">
              <label htmlFor="phoneNumber" className="text-lg font-medium pr-2" >
                Phone Number :
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-300 rounded-md p-2 mt-1 w-3/4"
                required
                placeholder='Enter Your Contact details'
              />
            </div>

            <div className="my-4">
              <label htmlFor="option" className="text-lg font-medium ">
                Select your purpose  
              </label>
              <select
                id="option"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="border border-gray-300 rounded-md p-2 mt-1"
                required
              >
                <option value="">-- Select your preferences--</option>
                <option value="option1">Driver</option>
                <option value="option2">HouseHelp</option>
                <option value="option3">Cook</option>
                <option value="option4">I want to upskill</option>
              </select>
            </div>

            <button type="submit" className="text-white font-medium py-2 px-4 rounded-lg" style={{ backgroundColor: '#000' }}>
              Submit
            </button>
            <br/>
          </form>
        )}
        </div>
        </div>
        </div>
    );
}

export default Schedule