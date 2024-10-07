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
            <section className="h-[800px] flex flex-col items-center justify-center">
                <header className="text-center mb-6">
                    <div className='flex items-center justify-center gap-2'>
                        <img src={circlelogo} className="animate-pulse" height={100} width={100} alt="Nav AI Logo" />
                        <h1 className="text-8xl font-extralight mb-0 cursor-default">Nav AI</h1>
                    </div>
                    <p className="text-gray-400 mt-2 text-3xl font-thin cursor-default transition ease-in-out delay-150 duration-300 hover:pointer-cursor hover:scale-110">real time task navigation</p>
                </header>
            </section>

            {/* What Nav AI Does Section */}
            <section className="text-center flex flex-col items-center justify-center">
                <div className='max-w-3xl bg-black text-left bg-opacity-20 rounded-lg border-gray-600 border-2 p-8'>
                    <h2 className="text-3xl font-semibold mb-4">what it is.</h2>
                    <p className="text-lg align-baseline text-justify">
                        Nav AI is a desktop application that provides real-time guidance in navigating through
                        software related tasks by dynamically capturing the user's screen and using AI analysis to deliver precise directions </p>
                </div>

            </section>
            <section className="mt-10 text-center flex flex-col items-center justify-center">
                <div className='max-w-3xl bg-black text-left bg-opacity-20 rounded-lg border-gray-600 border-2 p-8'>
                    <h2 className="text-3xl font-semibold mb-4">how does it do it.</h2>
                    <p className="text-lg align-baseline text-justify">
                        <div className='flex flex-row gap-4 items-center justify-center'>
                            <img src={electron} className="filter animate-spin grayscale " height={100} width={100} />+
                            <img src={react} className="filter grayscale animate-spin " height={100} width={100} />+
                            <img src={openai} className="filter grayscale animate-spin " height={100} width={100} />+
                            <img src={google} className="filter grayscale " height={100} width={100} />

                        </div>
                        Nav AI is a desktop application that provides real-time guidance in navigating through
                        software related tasks by dynamically capturing the user's screen and using AI analysis to deliver precise directions </p>
                </div>

            </section>
        </div>
    );
}

export default LandingPage;
