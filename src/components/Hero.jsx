import React from 'react'
import profilepic from '../assets/sid_img_11.jpg'
import {HERO_CONTENT} from "../constants"
import { motion } from 'framer-motion';

const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 initial={{x: -100 ,opacity:0}} animate={{x:0 ,opacity:1}} transition={{duration:0.5 , delay:0.5}} className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Siddarth Gullipalli</motion.h1>
            </div>
            <span className='bg-gradient-to-r from-pink-300 visa-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <img src={profilepic} alt=''/>
            </div>
        </div>
    </div>
  </div>
};

export default Hero;