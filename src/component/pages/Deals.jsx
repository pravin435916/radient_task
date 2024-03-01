import React from 'react';
import pc from '../../assets/pc.png';

export const Deals = () => {
    const CardsData = [
        {
            img: pc,
            off: "20% Off",
            time: "Limited Time",
            name: "Webbuilder1",
            info: "Computer Modern classic with Wix support",
            Discountprice: 39.96,
            price: 49.96,
        },
        {
            img: pc,
            off: "20% Off",
            time: "Limited Time",
            name: "Webbuilder1",
            info: "Computer Modern classic with Wix support",
            Discountprice: 39.96,
            price: 49.96,
        },
        {
            img: pc,
            off: "20% Off",
            time: "Limited Time",
            name: "Webbuilder1",
            info: "Computer Modern classic with Wix support",
            Discountprice: 39.96,
            price: 49.96,
        },
    ];

    return (
        <div className='w-full flex flex-col my-8'>
            <h1 className='text-5xl p-4'>Related deals you might like</h1>
            <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4 py-4'>
                {CardsData.map((item, index) => (
                    <div key={index} className='flex flex-col p-6 border'>
                        <div className='flex justify-center items-center p-6'>
                            <img className='w-40' src={item.img} alt="" />
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <span className='py-1 px-2 bg-[#F2F4F7] border rounded-lg'>{item.off}</span>
                            <span className='py-1 px-2 bg-[#F2F4F7] border rounded-lg'>{item.time}</span>
                        </div>
                        <span className='p-4 text-center font-semibold'>{item.name}</span>
                        <p className='text-sm'>{item.info}</p>
                        <div className='flex gap-2 justify-start-start items-center'>
                            <span className='text-lg'>{item.Discountprice}</span>
                            <span className='text-gray-500'>{item.price}</span>
                            <span className='text-red-400'>({item.off})</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <h1 className='text-3xl text-gray-500 p-4 sm:w-[50vw]'>Sign up and get exclusive special deals</h1>
                <div className='p-2'>
                    <button className='p-2 bg-[#1B88F4] hover:bg-[#79a3cd] w-36 border rounded-lg text-white'>Sign UP</button>
                </div>
            </div>
        </div>
    );
};
