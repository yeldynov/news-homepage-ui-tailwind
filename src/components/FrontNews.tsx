import React from 'react';
import Web3Desktop from '../assets/image-web-3-desktop.jpg';
import Web3Mobile from '../assets/image-web-3-mobile.jpg';

export default function FrontNews() {
  return (
    <div className='flex desk:flex-[2] flex-col gap-8'>
      <div>
        <picture>
          <source srcSet={Web3Desktop} media='(min-width: 375px)' />
          <img src={Web3Mobile} alt='MDN' />
        </picture>
      </div>
      <div className='flex desk:flex-row flex-col'>
        <div className='flex-1'>
          <h1 className='text-5xl desk:w-4/5 mb-5 font-extrabold text-c-very-dark-blue'>
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className='flex flex-1 flex-col justify-between'>
          <p className='text-c-dark-grayish-blue'>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className='w-1/2 mt-5 py-3 tracking-widest bg-c-soft-red hover:bg-c-very-dark-blue text-c-off-white'>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
