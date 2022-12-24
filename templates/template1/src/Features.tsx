import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Features = ({ image, imageAlt, title, description, action }) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt={imageAlt} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        {(
                            action && <button className="btn btn-primary" onClick={action}>
                                <AiOutlineArrowRight />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
