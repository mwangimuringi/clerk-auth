import React from 'react'

const Loader = () => {
    return (
        <div className="flex items-center justify-center hc w-full bg-background z-20">
            <data value="Loading..." className="text-xl font-bold text-white"></data>
            <div className="loader w-10 h-10"></div>
            <div className="loader w-10 h-10"></div>
            <div className="loader w-10 h-10"></div>
        </div>
    )
};

export default Loader