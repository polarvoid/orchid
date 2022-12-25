import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Head from 'next/head';
import GettingStarted from '../components/GettingStarted';

const homepage = () => {
    const heroStyle = {
        background: "linear-gradient(317.86deg, #6055FC 23.75%, #CDDBDE 25.13%, #D0D5CE 27.89%, #6D69D1 57.57%)",
        filter: "blur(106.89px)",
        transform: "rotate(-0.07deg)",
    };
    return (
        <>
            <Head>
                <title>Designer</title>
                <meta name="description" content="Homepage for designer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col h-full">
                <Navbar />
                <main className="flex flex-col grow bg-gray-200">
                    <div className="mt-[10%] flex flex-col gap-4 items-center grow text-center" style={heroStyle}>
                        <p className="w-[40%] font-bold text-black text-7xl" >
                            Create your own<br></br>
                            beautiful brand
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Ornare ornare quam massa enim.
                        </p>
                        <Link href="/start" className="px-10 py-2 mt-5 text-black bg-white rounded-2xl" >
                            Get Started
                        </Link>

                    </div>

                    <GettingStarted />

                    <div className="flex flex-col items-center">
                        <p>Team</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Auctor bibendum imperdiet sed euismod.</p>
                        <div className='grid mx-auto grid-cols-4'>
                            <div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default homepage;
