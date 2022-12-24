import React from 'react';

const Hero = ({ url }) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${url})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Software App</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan porttitor egestas fermentum nulla.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
