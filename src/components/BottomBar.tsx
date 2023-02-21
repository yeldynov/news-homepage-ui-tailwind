import React from 'react';
import ImgGaming from '../assets/image-gaming-growth.jpg';
import ImgRetro from '../assets/image-retro-pcs.jpg';
import ImgTopLaptops from '../assets/image-top-laptops.jpg';

export default function BottomBar() {
  return (
    <div className='flex mt-10'>
      <div className='flex flex-col desk:flex-row gap-10 mt-2 w-[90%]'>
        <div className='desk:flex-[1] flex gap-5'>
          <img className='w-20' src={ImgRetro} alt='' />
          <div>
            <h3 className='text-2xl font-bold text-c-dark-grayish-blue'>01</h3>
            <h4 className='font-bold text-c-very-dark-blue hover:text-c-soft-red hover:cursor-pointer'>
              Reviving Retro PCs
            </h4>
            <p className='text-c-dark-grayish-blue text-sm'>
              {' '}
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className='flex-1 flex gap-5'>
          <img className='w-20' src={ImgTopLaptops} alt='' />
          <div>
            <h3 className='text-2xl font-bold text-c-dark-grayish-blue'>02</h3>
            <h4 className='font-bold text-c-very-dark-blue hover:text-c-soft-red hover:cursor-pointer'>
              Top 10 Laptops of 2022
            </h4>
            <p className='text-c-dark-grayish-blue text-sm'>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className='flex-1 flex gap-5 desk:pl-7'>
          <img className='w-20' src={ImgGaming} alt='' />
          <div>
            <h3 className='text-2xl font-bold text-c-dark-grayish-blue'>03</h3>
            <h4 className='font-bold text-c-very-dark-blue hover:text-c-soft-red hover:cursor-pointer'>
              The Growth of Gaming
            </h4>
            <p className='text-c-dark-grayish-blue text-sm'>
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
