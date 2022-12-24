import React from 'react';
import { BsPalette } from 'react-icons/bs';
import { MdOutlineTouchApp } from 'react-icons/md';

const Hero2 = ({ image }) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Best Software Solution</h1>
                    <div className='grid grid-cols-3 mt-2 gap-2'>
                        <div className="bg-white p-2 flex flex-col items-center">
                            <BsPalette className="text-6xl" />
                            <p className="text-xl font-bold mt-2">Design</p>
                        </div>
                        <div className="bg-white p-2 flex flex-col items-center">
                            <MdOutlineTouchApp className="text-6xl" />
                            <p className="text-xl font-bold mt-2">Usage</p>
                        </div>
                        <div className="bg-white p-2 flex flex-col items-center">
                            <BsPalette className="text-6xl" />
                            <p className="text-xl font-bold mt-2">Testing</p>
                        </div>

                    </div>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan porttitor egestas fermentum nulla.
                    </p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
