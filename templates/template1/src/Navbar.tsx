import React from 'react';

const Navbar = ({ projectName, items }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">{projectName}</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {items.map((item, index) => {
                        return (
                            <li tabIndex={index} key={item.name}>
                                <a href={item.url}>{item.name}</a>
                            </li>

                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
