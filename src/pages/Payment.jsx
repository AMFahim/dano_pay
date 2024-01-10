import React from 'react';
import { DiMagento } from "react-icons/di";
import dimond from "./../assets/dimond.jpg";
import paymentImg from "./../assets/paymentImg.jpg";
import { FaRegNewspaper } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { SiBoehringeringelheim } from "react-icons/si";
import { LiaShipSolid } from "react-icons/lia";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiTriangle } from "react-icons/fi";
import { MdCurrencyExchange } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoIosFlower } from "react-icons/io";










const Payment = () => {
    return (
        <div className='mx-auto flex justify-center pt-16'>
            <div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <span className='text-2xl'><DiMagento /></span>
                        <span>EEE</span>
                    </div>
                    <h1 className='ml-16 mr-20 font-semibold'>Payment</h1>
                    <img className='w-4' src={dimond} alt='icon' />
                </div>
                <img className='w-full' src={paymentImg} alt='logo' />
                <button className='flex justify-between border p-2 rounded-[20px] mt-3'>
                    <span>⚪ EPP</span>
                    <span className='mx-16'>Payment</span>
                    <span>⚪⚪</span>
                </button>
                <div className='flex gap-3 my-3'>
                    <button className='flex border px-4 py-2 gap-3 rounded-[20px] border-primary-gray'>
                        <span className='text-2xl'><FaRegNewspaper /></span>
                        <span>Anpo</span>
                        <span className='text-2xl'><BsArrowUpRight /></span>
                    </button>
                    <button className='flex border px-4 py-2 gap-3 rounded-[20px] border-primary-gray'>
                        <span className='text-2xl'><SiBoehringeringelheim /></span>
                        <span>EHC</span>
                        <span className='text-2xl'><LiaShipSolid /></span>
                    </button>
                </div>
                <div className='flex justify-center'>
                    <button className='flex gap-3 border-2 rounded-l-[20px] px-3 py-2'>
                        <span className='text-2xl'><MdOutlineAccessTime /></span>
                       <span className='font-semibold'> Pauyimon</span>
                    </button>
                    <button className=' border-2 rounded-r-[20px] px-8 py-2  bg-[#33F4FB] text-white'>
                        {/* <span className='text-2xl'><MdOutlineAccessTime /></span> */}
                       <span className='font-semibold'> $543,244</span>
                    </button>
                </div>
                <button className='flex justify-between border p-2 border-primary-gray rounded-[20px] mt-3 shadow-lg'>
                    <span className='text-xl'><FiTriangle /></span>
                    <span className='mx-16'>Apprrrorreation</span>
                    <span>$99</span>
                </button>
                <button className='flex justify-between border p-2 border-primary-gray rounded-[20px] mt-3 shadow-lg'>
                    <span className='text-xl'><MdCurrencyExchange /></span>
                    <span className='mx-[76px]'>RiarmacIcon</span>
                    <span>$99</span>
                </button>
                <button className='flex justify-between border p-2 border-primary-gray rounded-[20px] mt-3 shadow-lg'>
                    <span className='text-xl'><CiHeart /></span>
                    <span className='mx-[73px]'>Flat Currency</span>
                    <span>$99</span>
                </button>
                <button className='flex justify-between border p-2  rounded-[20px] mt-3 shadow-lg mb-4 bg-[#33F4FB]'>
                    <span className='text-xl'><IoIosFlower /></span>
                    <span className='mx-[95px] text-white font-semibold'>EcBginy</span>
                    <span className='text-xl'><IoIosFlower /></span>
                </button>
            </div>
        </div>
    );
};

export default Payment;