import React from 'react';

const SelectsCard = (props) => {
  return (
    <div className='relative '>
        <img className='w-full h-full object-cover rounded-2xl' src={props.bg} alt='/' />
      <div className=''>
      
      <div className='bg-gray-900/30 hover:bg-transparent cursor-pointer absolute top-0 left-0 w-full h-full rounded-2xl'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          {props.text}
        </p>
      </div>
      </div>
    </div>
  );
};

export default SelectsCard;