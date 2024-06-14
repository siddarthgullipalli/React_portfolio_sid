import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import React from 'react'

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
    <span className='bg-gradient-to-r from-pink-300 visa-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>.. /Sid.Dev</span>
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