import React from 'react';
import Marquee from "react-fast-marquee";

const Breaking = () => {
    return (
        <div className='flex justify-center items-center bg-gray-300 p-2'>
            <button className='btn bg-red-500 text-white'>Latest news</button>
             <Marquee>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, labore!</h1>
            </Marquee>
        </div>
    );
};

export default Breaking;