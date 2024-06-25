import React from 'react';

function Card(props) {

    // coming from card handsome inside the return of the function app in app.jsx
    console.log("Card Handsome (in Card.jsx): ",props.handsome);

    return (
        <div className="relative h-[800px] w-[700px] rounded-lg shadow-2xl mb-2">
            <img
                src="https://i.pinimg.com/736x/1a/15/f8/1a15f8b7d2ef6f5809bd44b1ced3aae1.jpg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{props.handsome}</h1>
                <p className="mt-2 text-sm text-gray-300">{props.desc}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                {props.btnText}
                </button>
            </div>
        </div>
    );
}

export default Card;
