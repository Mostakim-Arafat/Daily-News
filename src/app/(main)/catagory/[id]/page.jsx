import React from 'react';
import Leftside from '@/Component/Homepage/leftside';
import Rightside from '@/Component/Homepage/rightside';
import { getNewsCatagory } from '@/lib/data';
import { NewsData } from "@/lib/data";
import NewsCard from '@/Component/shared/NewsCard';


const CategoryNews = async ({ params }) => {
    const { id } = await params
    console.log(id)
    const CatagoryData = await getNewsCatagory()
    const newsData = await NewsData(`${id}`)
    console.log(newsData)
    return (
        <div className="grid grid-cols-12 gap-3 mt-6">
            <div className=" col-span-3">
                <Leftside CatagoryData={CatagoryData} selected={id}></Leftside>
            </div>

            <div className="col-span-6">
                <h1 className='text-2xl font-bold'>News by Catagory</h1>

                {
                    newsData.length > 0 ? newsData.map(n => <NewsCard key={n._id} n={n}></NewsCard>) : <h2 className='text-4xl text-center font-sans'>No data found</h2>
                }
            </div>

            <div className="col-span-3">
                <Rightside></Rightside>
            </div>
        </div>
    );
};

export default CategoryNews;