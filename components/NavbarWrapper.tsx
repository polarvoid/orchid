import React from 'react';
import Navbar from './Navbar';

const NavbarWrapper = ({ children }) => {
    return (
        <div className="flex flex-col h-full">
            <Navbar />
            <main className="flex grow">
                {children}
            </main>
        </div>
    );
};

export default NavbarWrapper;
