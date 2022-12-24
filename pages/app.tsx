import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Head from 'next/head';

const homepage = () => {
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
                <main className="flex grow">
                    <div className="mt-[10%] flex flex-col gap-4 items-center grow text-center">
                        <p className="w-[40%] font-bold text-black text-7xl" >
                            Create your own<br></br>
                            beautiful brand
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Ornare ornare quam massa enim.
                        </p>
                        <Link href="/start" className="px-10 py-5 mt-5 text-white bg-[#454545CC] rounded-[56px]" >
                            Get Started
                        </Link>

                    </div>
                </main>
            </div>
        </>
    );
};

export default homepage;
