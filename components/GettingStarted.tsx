import React, { useState } from 'react';

const GettingStarted = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setError("This field is required");
            return;
        }
        setError("");
        alert(`Name: ${name} Description: ${description}`);
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    return (
        <>
            <div className="bg-gray-200 flex flex-col min-h-full items-center" id="getting-started">
                <div className="py-10 text-center text-black">
                    <p className="text-5xl font-bold">Start creating</p>
                    <p className="text-black/75">Create your own project</p>
                </div>
                <div className="w-4/6 h-4/6 mb-4 bg-[#F1F1F1] rounded-xl flex flex-col">
                    <form className="grow w-full bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 flex flex-col gap-6" onSubmit={onSubmit} >
                        <div className="block">
                            <label className="label " htmlFor="username">
                                <span className="label-text text-black text-3xl font-black font-[Satoshi]">Name</span>
                            </label>
                            <input className={`input input-bordered w-full ${error && "input-error"}`} id="username" type="text" placeholder="Enter your project name" value={name} onChange={onChangeName} />
                            <label className="label">
                                <span className="label-text-alt">{error}</span>
                            </label>
                        </div>

                        <div className='flex flex-col grow'>
                            <label className="label " htmlFor="description">
                                <span className="label-text text-black text-3xl font-black font-[Satoshi]">Description</span>
                            </label>
                            <textarea className="input input-bordered w-full grow" id="descrition" rows={200} placeholder="Enter your project description" value={description} onChange={onChangeDescription} />
                        </div>

                        <div className="w-fit rounded-3xl mt-auto flex justify-center items-center py-2 px-8 bg-black/25 text-black">
                            <input type="submit" value="Create" />
                        </div>

                    </form>
                </div>
            </div >
        </>
    );
};

export default GettingStarted;
