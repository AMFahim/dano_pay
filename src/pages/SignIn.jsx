import React from 'react';
import LoginImg from "./../assets/loginImg.jpg"
import { CiUser } from "react-icons/ci";


const SignIn = () => {
    return (
        <div className='mx-auto flex justify-center pt-16'>
            {/* <h1 className=' font-poppin'>This is signin page</h1> */}
            <div>
            <img src={LoginImg} alt='login'/>
            <br/>
            <input 
             type='text'
             placeholder='⚪ Nuskome----------⚪'
             className="px-5 py-2 text-white border-2 outline-none rounded-[20px] bg-primary-gray mb-4"
            />
            <br/>
            <input 
             type='password'
             placeholder='⚪ Password----------⚪'
             className="px-5 py-2 text-white border-2 outline-none rounded-[20px] bg-primary-gray mb-4"
            />
            <br/>
            <input 
             type='text'
             placeholder='⚪ Paspor-------------⚪'
             className="px-5 py-2 text-white border-2 outline-none rounded-[20px] bg-primary-gray mb-4"
            />
            <br/>
            <div className='border-2 border-primary-gray rounded-[20px]'>
                <div className='flex justify-between px-2 border-b-2 border-primary-gray py-2 pb-3'>
                <span className=' font-semibold'>Admin </span>
                <span className='border-b border-primary-gray font-semibold flex'><span className='mt-[5px]'><CiUser /></span>|</span>
                <span>🖤</span>
                </div>
                <div className='flex justify-between px-2 py-2 pb-3'>
                <span className=' font-semibold'>User</span>
                <span className='border-b border-primary-gray font-semibold flex ml-[14px]'><span className='mt-[5px]'><CiUser /></span>|</span>
                <span>🖤</span>
                </div>
              
            </div>
            </div>
        </div>
    );
};

export default SignIn;