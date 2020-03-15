// src/components/button.js
import React from "react";

export default function Button({ children, ...buttonProps }) {
    return (
        <React.Fragment>
            <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com"></input>
            <button
                className="px-2 py-1 rounded-lg bg-green-400 text-green-800 text-xl font-light uppercase shadow-md hover:shadow-lg"
                {...buttonProps}
            >
                {children}
            </button>
        </React.Fragment>
    );

}