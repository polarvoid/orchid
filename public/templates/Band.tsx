import React from 'react';

interface AppProps {
    config?: { title: string; description: string; theme: string };
  }
  
  export default function App({ config }: AppProps): JSX.Element {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">{config?.title}</a>
                </div>
                <div className="flex-none mr-20">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a href="">Band</a></li>
                        <li><a href="">Tour</a></li>
                        <li><a href="">Contact</a></li>
                        <li tabIndex={0}>
                            <a>
                                More
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><a>Merchandise</a></li>
                                <li><a>Extras</a></li>
                                <li><a>Multimedia</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.w3schools.com/w3images/chicago.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Book now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <h3>{config?.description}</h3>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone number</span>
                                </label>
                                <input type="text" placeholder="phone" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Contact me!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
