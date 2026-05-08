import React from 'react';
import Link from 'next/link';

const Leftside = ({CatagoryData, selected}) => {
  
    return (
        <>
            <h1 className="text-lg">All catagories</h1>
            <ul>
                {
                    CatagoryData.map(i => <Link href={`/catagory/${i.category_id}`} key={i.category_id} className={`${i.category_id === selected ? 'text-red-500' : '' }  p-2 mt-3 font-medium flex justify-center items-center rounded-md`}>{i.category_name}</Link>)
                }
            </ul>
        </>
    );
};

export default Leftside;