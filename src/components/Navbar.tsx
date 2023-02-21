import { useState } from 'react';
import MenuLogo from '../../src/assets/logo.svg';
import IconMenu from '../../src/assets/icon-menu.svg';
import IconMenuClose from '../../src/assets/icon-menu-close.svg';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-c-off-white'>
      <div className='justify-between mx-auto md:items-center md:flex'>
        <div>
          <div className='flex mb-3 desk:p-0 items-center justify-between py-3 md:py-5 md:block'>
            <a href='javascript:void(0)'>
              <img src={MenuLogo} alt='' />
            </a>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <img src={IconMenuClose} alt='' />
                ) : (
                  <img src={IconMenu} alt='' />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <li className='text-c-dark-grayish-blue hover:text-c-soft-red'>
                <a href='javascript:void(0)'>Home</a>
              </li>
              <li className='text-c-dark-grayish-blue hover:text-c-soft-red'>
                <a href='javascript:void(0)'>New</a>
              </li>
              <li className='text-c-dark-grayish-blue hover:text-c-soft-red'>
                <a href='javascript:void(0)'>Popular</a>
              </li>
              <li className='text-c-dark-grayish-blue hover:text-c-soft-red'>
                <a href='javascript:void(0)'>Trending</a>
              </li>
              <li className='text-c-dark-grayish-blue hover:text-c-soft-red'>
                <a href='javascript:void(0)'>Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
