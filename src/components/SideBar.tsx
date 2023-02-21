import React from 'react';

type Props = {};

export default function SideBar({}: Props) {
  return (
    <div className='flex flex-[1] flex-col gap-5 bg-c-very-dark-blue text-c-off-white p-10'>
      <h1 className='text-3xl text-c-soft-orange font-bold'>New</h1>
      <div className='flex flex-col gap-5 divide-y divide-c-dark-grayish-blue'>
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold hover:text-c-soft-orange hover:cursor-pointer'>
            Hydrogen VS Electric Cars
          </h2>
          <p className='text-c-dark-grayish-blue text-sm'>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div>
          <h2 className='mt-5 flex flex-col gap-2 hover:text-c-soft-orange hover:cursor-pointer'>
            The Downsides of AI Artistry
          </h2>
          <p className='text-c-dark-grayish-blue text-sm'>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div>
          <h2 className='mt-5 flex flex-col gap-2 hover:text-c-soft-orange hover:cursor-pointer'>
            Is VC Funding Drying Up?
          </h2>
          <p className='text-c-dark-grayish-blue text-sm'>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
}
