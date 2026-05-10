'use client'

import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { authClient } from '@/lib/auth-client';

const Rightside = () => {

    const handleGithub = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
    }
    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <>
            <h1 className='text-2xl  mb-2'>Login With</h1>
            <div className='flex flex-col'>
                <button className='btn  border border-blue-400 text-blue-400 mb-1' onClick={handleGoogle}><FaGoogle />Login with google</button>
                <button className='btn' onClick={handleGithub}><FaGithub />Login with Github</button>
            </div>
        </>
    );
};

export default Rightside;