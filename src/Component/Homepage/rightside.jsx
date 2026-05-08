import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Rightside = () => {
    return (
        <>
            <h1 className='text-2xl  mb-2'>Login With</h1>
            <div className='flex flex-col'>
                <button className='btn  border border-blue-400 text-blue-400 mb-1'><FaGoogle />Login with google</button>
                <button className='btn'><FaGithub />Login with Github</button>
            </div>
        </>
    );
};

export default Rightside;