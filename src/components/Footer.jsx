import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='container mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>BEACHES.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between py-4'>
          <ul className='lg:flex'>
            <li className='px-4'>About</li>
            <li className='px-4'>Partnerships</li>
            <li className='px-4'>Careers</li>
            <li className='px-4'>Newsroom</li>
            <li className='px-4'>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li className='px-4'>Home</li>
            <li className='px-4'>Destinations</li>
            <li className='px-4'>Travel</li>
            <li className='px-4'>View</li>
            <li className='px-4'>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;