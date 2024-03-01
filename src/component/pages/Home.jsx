import React from 'react';
import { FaChevronDown, FaAngleRight } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { Cards } from './Cards';
import { Deals } from './Deals';

export const Home = () => {
    return (
        <div className='w-full overflow-hidden flex justify-center items-center'>
            <div className='w-[90vw] sm:w-2/3 flex justify-center items-start flex-col'>
                <span className='text-3xl sm:text-5xl mt-4'>Best Website builders in the US</span>
                <div className='w-full flex flex-col sm:flex-row justify-between items-center border-t-2 border-b-2 mt-4'>
                    <div className='flex gap-2 items-center py-2 sm:py-4'>
                        <span className='text-lg sm:text-2xl'><IoCheckmarkDoneCircleOutline /></span>
                        <span className='text-xs sm:text-base'>Last Updated - February 22,2020</span>
                        <span className='ml-2 text-lg sm:text-2xl'><CiCircleInfo /></span>
                        <span className='text-xs sm:text-base'>Advertising Disclosure</span>
                    </div>
                    <div className='flex items-center gap-2 p-2'>
                        <span className='text-sm sm:text-base'>Top Relevant </span>
                        <span className='text-gray-600'><FaChevronDown /></span>
                    </div>
                </div>
                <nav>
                    <ul className='flex flex-wrap gap-2 sm:gap-14 py-2 sm:py-4'>
                        <li className='text-xs sm:text-base'>Tools</li>
                        <li className='text-xs sm:text-base'>AWS Builder</li>
                        <li className='text-xs sm:text-base'>Start Builds</li>
                        <li className='text-xs sm:text-base'>Builds supplies</li>
                        <li className='text-xs sm:text-base'>Tooling</li>
                        <li className='text-xs sm:text-base'>Blue Hosting</li>
                    </ul>
                </nav>
                <div className='flex flex-wrap gap-1 sm:gap-2 justify-center items-center text-xs sm:text-base'>
                    <span>Home</span>
                    <span><FaAngleRight /></span>
                    <span>Hosting for all</span>
                    <span><FaAngleRight /></span>
                    <span>Hosting</span>
                    <span><FaAngleRight /></span>
                    <span>Hosting6</span>
                    <span><FaAngleRight /></span>
                    <span>Hosting5</span>
                </div>
                <Cards />
                <Deals />
            </div>
        </div>
    );
};
