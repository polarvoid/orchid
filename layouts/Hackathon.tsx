import React from 'react';

const App = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <img src="https://w7.pngwing.com/pngs/574/475/png-transparent-logo-xunit-random-org-randomness-computer-software-logo-github-blue-angle-text.png" alt="logo" className="w-10 h-10 mr-2" />
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">{'Hackathon Starter'}</a>
                </div>
                <div className="flex-2 mr-40">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/">Home</a></li>
                            <li><a href="https://github.com">Github</a></li>
                            <li><a href="/team">Team</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Team Orchid</h1>
                        <p className="py-6">Meet our team of expert hackers.</p>
                        <button className="btn btn-primary" tabIndex={2}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
