import React from 'react'
import ProductsData from '../Data/ProductsData'
import { FaChevronDown } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import { CiTrophy } from "react-icons/ci";
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
export const Cards = () => {
    return (
        <div className='w-full'>
            {
                ProductsData.map((item, index) => {
                    return (
                        <div key={index} className='h-full w-full   border rounded-lg  flex sm:flex-row flex-col sm:text-sm text-xs justify-evenly items-center pb-2 my-8 relative'>
                            {
                                item.tag && (
                                    <div className='flex bg-[#FF7724] text-white items-center gap-2 p-1 border rounded-lg absolute -left-2 -top-2 '>
                                        <span className='text-xl '><CiTrophy /></span>
                                        <span className=' '>{item.tag}</span>
                                    </div>

                                )
                            }
                            <div className='w-8 h-8 border rounded-full flex items-center justify-center absolute left-0 top-12'>
                                <span className=''>{item.sr}</span>
                            </div>
                            <div className='w-[10rem] flex flex-col h-full justify-start items-center relative gap-2'>
                                <img className='w-40' src={item.img} alt="" />
                                <span>{item.imgName}</span>
                            </div>
                            <div className='sm:w-[28rem]'>
                                <span className='font-bold'>{item.name}</span>
                                <span>- {item.info}</span>
                                <div className='flex flex-col mt-4'>
                                    <h1 className='font-bold'>Main HIghlight</h1>
                                    <p className='ml-4'>{item.highlight}</p>
                                    {item.extra1 && (
                                        <>
                                            <div className='w-full p-2 bg-[#FFF4ED] flex flex-col'>
                                                <span className='p-2'>9.9 {item.extra1}</span>
                                                <span className='p-2'>8.9 {item.extra2}</span>
                                                <span className='p-2'>8.9 {item.extra3}</span>
                                            </div>
                                            <div className='w-full p-4 flex flex-col gap-2'>
                                                <span className='flex'><span className='text-xl'><IoCheckmarkDoneCircleOutline /></span> {item.f1}</span>
                                                <span className='flex'><span className='text-xl'><IoCheckmarkDoneCircleOutline /></span> {item.f2}</span>
                                                <span className='flex'><span className='text-xl'><IoCheckmarkDoneCircleOutline /></span> {item.f3}</span>
                                            </div>
                                        </>
                                    )}

                                </div>
                                <div className='flex gap-2 text-[#1B88F4] mt-6 items-center'>
                                    <span >Show More</span>
                                    <span ><FaChevronDown /></span>
                                </div>
                            </div>
                            <div className='flex justify-evenly items-center flex-row sm:flex-col w-[12rem] gap-4 mt-4 sm:mt-0 '>
                                <div className='flex flex-col justify-center items-center bg-[#F3F9FF] p-2 mb-2 sm:mb-36 gap-1'>
                                    <span className='text-2xl font-semibold'>{item.rating}</span>
                                    <span>{item.ratingName}</span>
                                    <span className='text-xs' > <Rating name="read-only" value={item.value} readOnly /></span>
                                </div>
                                <div className='mt-0 sm:mt-6'>
                                    <button className='p-2 bg-[#1B88F4] hover:bg-[#79a3cd] w-40 border rounded-lg text-white'>View</button>
                                </div>
                            </div>

                        </div>
                    );
                })
            }

        </div>
    )
}
