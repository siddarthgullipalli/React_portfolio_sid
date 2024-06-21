import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import React from 'react'
import { motion } from 'framer-motion';

const con = (delay) => {
  return ({
    hidden:{x:-100 , opacity :0.5},
    visible1: {
      x:0 ,
      opacity :1,
      transition : {duration :0.8, delay : delay}
    },
    visible: {
        x:0 ,
        opacity :1,
        transition : {duration :0.5, delay : delay}
    }
  }
   
  )
}

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
    <motion.span variants={con(0)} initial='hidden' animate = 'visible'  className='bg-gradient-to-r from-pink-300 visa-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>.. /Sid<motion.span variants={con(0)} initial='hidden' animate = 'visible1'>.Dev</motion.span></motion.span>
      {/* <img className="mx-2 w-10" src={logo} alt=''/> */}
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedin/>
      <FaGithub/>
      <FaSquareXTwitter/>
      <FaInstagram/>
    </div>
  </nav>
}

export default Navbar

