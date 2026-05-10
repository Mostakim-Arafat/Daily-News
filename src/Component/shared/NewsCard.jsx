import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ n }) => {
    return (
        <div className='border p-3 rounded-md mt-2 '>
            {n.title}
            <Image
                src={n.author.img}
                alt='just img'
                width={60}
                height={60}
            >
            </Image>
            <Image
                src={n.image_url}
                alt='banner img'
                width={200}
                height={100}
            >

            </Image>
            <Link href={`/news/${n._id}`}>
                <button className='btn'>See detail</button>
            </Link>
        </div>
    );
};

export default NewsCard;