import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-[55%] py-4 mt-10 mx-auto bg-[#454545CC] text-white rounded-[56px]">
            <ul className="flex gap-10 justify-center">
                <li>
                    <Link href="/app">Home</Link>
                </li>
                <li>
                    <Link href="https://github.com/polarvoid/orchid">Github</Link>
                </li>
                <li>
                    <Link href="/team">Team</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
