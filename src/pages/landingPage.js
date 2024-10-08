import React from 'react';
import circlelogo from '../assets/circlelogo.png';
import electron from '../assets/electron.png';
import react from '../assets/react.png';
import openai from '../assets/openai.png';
import google from '../assets/google.png';

const LandingPage = () => {
    return (
        <div className=" pb-10 text-white">
            {/* Full-screen Intro Section */}
            <section className="h-[80vh] flex flex-col items-center justify-center" id="home">
                <header className="text-center">
                    <div className='flex items-center justify-center gap-2'>
                        <img src={circlelogo} className="animate-[spin_3s_ease-in-out_infinite]" height={80} width={80} alt="Nav AI Logo" />
                        <h1 className="text-7xl font-extralight mb-0 cursor-default animate-slidein delay-200">Nav AI</h1>
                    </div>
                    <p className="text-gray-400 mt-2 text-2xl font-thin cursor-default transition ease-in-out delay-150 duration-300 hover:pointer-cursor hover:scale-110">real time task navigation</p>
                </header>
            </section>

            {/* What Nav AI Does Section */}
            <div className='flex flex-col p-2 gap-4 items-center justify-center h-screen' id="about">

                <div className='max-w-3xl bg-black text-left bg-opacity-20 rounded-lg border-gray-600 border-2 p-8'>
                    <h2 className="text-2xl font-semibold mb-4">what it is.</h2>
                    <p className="text-md align-baseline text-justify">
                        Nav AI is a desktop application that provides real-time guidance in navigating through
                        software related tasks by dynamically capturing the user's screen and using AI analysis to deliver precise directions </p>
                </div>


                <div className='max-w-3xl bg-black text-left bg-opacity-20 rounded-lg border-gray-600 border-2 p-8'>
                    <h2 className="text-2xl font-semibold mb-4">how does it do it.</h2>
                    <p className="text-md align-baseline text-justify">
                        <div className='flex flex-row  gap-2 sm:gap-8 mb-2  justify-between  items-center'>
                            <img src={electron} className="filter grayscale h-[50px] md:h-[90px] w-auto" />+
                            <img src={react} className="filter grayscale h-[50px] md:h-[90px] w-auto" />+
                            <img src={openai} className="filter grayscale h-[50px] md:h-[90px] w-auto" />+
                            <img src={google} className="filter grayscale h-[50px]  md:h-[90px] w-auto" />
                        </div>

                        We used Electron.JS to build the app & capture user's screen, React for UI combined with GPT-4 API for AI-driven task guidance and finally Google Vision's API to analyze the user's screen. </p>
                </div>

                <div className='max-w-3xl bg-black text-left bg-opacity-20 rounded-lg border-gray-600 border-2 p-8'>
                    <h2 className="text-2xl font-semibold mb-4">why we built it.</h2>
                    <p className="text-md align-baseline text-justify">
                        We love our parents a little too much and could not stand to see them struggle with using a computer. With constant updates and new apps being launched all the time, users find it hard to keep up. Nav AI  fixes this.
                    </p>
                </div>



            </div>
            <div className='h-[600px] flex items-center justify-center gap-4 p-2' id="contact">
                <a href="https://github.com/jvalaj/navai" className='bg-gray-800 text-white rounded-lg px-14 py-10 hover:bg-gray-600 transition duration-200'>View on GitHub</a>
                <a href="mailto:jvalaj@usf.edu" className='bg-gray-700 text-white rounded-lg px-14 py-10 hover:bg-gray-600 transition duration-200'>Contact Us for a Demo</a>
            </div>
        </div>
    );
}

export default LandingPage;
