import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
      </div>
      <ul className='hidden md:flex text-lg '>
        <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'><Link to="/destinations">Destinations</Link></li>
        <li className='p-4'><Link to="/travel">Travel</Link></li>
        <li className='p-4'><Link to="/view">View</Link></li>
        <li className='p-4'><Link to="/book">Book</Link></li>
      </ul>
      <div className='hidden md:flex gap-4 px-2'>
        <BsPerson size={25} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>BEACHES.</h1>
          <li className='border-b py-5'>Home</li>
          <li className='border-b py-5'>Destinations</li>
          <li className='border-b py-5'>Travel</li>
          <li className='border-b py-5'>View</li>
          <li className='border-b py-5'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;