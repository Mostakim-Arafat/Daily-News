import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center text-center mt-100'>
            <h1>Global Loading</h1>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    );
};

export default loading;