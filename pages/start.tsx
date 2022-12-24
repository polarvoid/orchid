import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { TitleBar } from 'react-desktop/macOs';

const Start = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        alert(`Name: ${name} Description: ${description}`);
        e.preventDefault();
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    return (
        <div className="bg-[#DCDCDC] flex flex-col min-h-full items-center">
            <div className="py-10 text-center">
                <p className="text-5xl font-bold">Start creating</p>
                <p className="opacity-50">Create your own project</p>
            </div>
            <div className="w-4/6 h-4/6 grow mb-4 bg-[#F1F1F1] rounded-xl flex flex-col">
                <TitleBar
                    title="Create your design"
                    controls
                    className="py-1"
                    transparent={false}
                    isWindowFocused={true}
                />
                <div className="grow px-[10%] py-[5%] flex flex-col justify-center items-center">
                    <form className="grow w-full bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 flex flex-col gap-6" onSubmit={onSubmit} >
                        <div>
                            <label className="block text-black text-3xl font-black font-[Satoshi] mb-2" htmlFor="username">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 bg-[#F0F0F0] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your project name" value={name} onChange={onChangeName} />
                        </div>

                        <div className='grow flex flex-col'>
                            <label className="block text-black text-3xl font-black font-[Satoshi] mb-2" htmlFor="username">
                                Description
                            </label>
                            <textarea className="grow shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 bg-[#F0F0F0] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your project description" value={description} onChange={onChangeDescription} />
                        </div>

                        <div className="w-fit rounded-3xl mt-auto flex justify-center items-center py-2 px-8 bg-black/25 text-black">
                            <input type="submit" value="Create" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

// export default start;
export default dynamic(() => Promise.resolve(Start), { ssr: false });
