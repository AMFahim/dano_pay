import React from 'react';
import { CgShapeRhombus } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";
import settingImg from "./../assets/settingImg.jpg";
import MyLineChart from '../components/MyLineChart';
import MyBarChart from '../components/MyBartChart';
import SpritesImg from "../assets/settingImg2.jpg";
import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.jpg";
import icon3 from "../assets/icon3.jpg";



const Setting = () => {
    return (
        <div className='mx-auto flex justify-center pt-16'>
            <div>
                <div className='flex justify-between'>
                    <span><CgShapeRhombus /></span>
                    <h1 className='mx-20 font-semibold'>Setting</h1>
                    <span className="text-2xl"><IoReorderThreeOutline /></span>
                </div>
                <br />
                <div className='flex justify-center items-center mb-8'>
                    <img src={settingImg} alt='settings' className='w-64' />
                </div>
                <div className='mb-4 flex justify-center gap-4'>
                    <button className='px-4 py-2 rounded-[20px] border font-bold text-primary-gray'>Sphilts</button>
                    <button className='px-5 py-2 rounded-[20px] border font-bold text-primary-gray'>Usen</button>
                </div>
                    <MyBarChart />
                <p className='font-bold text-start p-4 ml-2 text-primary-gray'>Trusnfis</p>
                <MyLineChart />
                <div className='flex justify-between my-3'>
                    <h2 className='font-semibold font-poppins'>Sprites</h2>
                    <img src={SpritesImg} alt='img'/>
                </div>
                <div className='flex justify-between my-3'>
                    <img className='w-12 h-12' src={icon1} alt='icon'/>
                    <img className='w-12 h-12' src={icon2} alt='icon'/>
                    <img className='w-12 h-12' src={icon3} alt='icon'/>
                </div>
            </div>
        </div>
    );
};

export default Setting;