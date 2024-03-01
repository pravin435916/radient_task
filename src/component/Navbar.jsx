import React from 'react';
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
    return (
        <div className='w-full overflow-hidden flex justify-center items-center bg-[#212731] text-white'>
            <div className='w-full sm:w-1/2 p-4 flex flex-col sm:flex-row justify-between items-center'>
                <div className="flex items-center justify-center bg-white p-1 border rounded-lg mb-4 sm:mb-0">
                    <CiSearch className="mr-2 text-black text-2xl" />
                    <input className="bg-transparent text-black border-none rounded-xl px-2 py-1 focus:outline-none" type="search" placeholder="Search..." />
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <span><a href="/categories">Categories</a></span>
                    <span><a href="/website-builders">Website Builders</a></span>
                    <span><a href="/deals">Today's Deals</a></span>
                </div>
            </div>
        </div>
    );
};
