'use client';

import { motion } from 'framer-motion';

import { footerVariants } from '@/lib/motion';

import { socials } from '@/constants';

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className='sm:px-16 px-6 py-8 relative'
    >
      {/* gradient */}
      <div className='footer-gradient' />
      <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'>
        {/* upper part */}
        <div className='flex justify-between items-center flex-wrap gap-5'>
          <h4 className='font-bold text-[44px] md:text-[64px] text-white'>
            Enter the PlanetPilot
          </h4>
          <button
            type='button'
            className='flex items-center h-fit py-4 px-6 bg-[#256188] rounded-[32px] gap-[12px]'
          >
            <img
              src='/headset.svg'
              alt='headset'
              className='w-[24px] h-[24px] object-contain'
            />
            <span className='font-normal text-[16px] text-white'>
              Enter PlanetPilot
            </span>
          </button>
        </div>

        {/* lower part */}
        <div className='flex flex-col'>
          {/* horizontal ruler */}
          <div className='mb-[50px] h-[2px] bg-white opacity-10' />

          <div className='flex justify-between items-center flex-wrap gap-4'>
            {/* title text */}
            <h4 className='font-extrabold text-[24px] text-white'>
              PlanetPilot
            </h4>
            {/* copyright */}
            <p className='font-normal text-[14px] text-white opacity-50'>
              Copyright © {new Date().getFullYear()} - PlanetPilot. All rights
              reserved.
            </p>
            {/* socials */}
            <div className='flex gap-4'>
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className='w-[24px] h-[24px] object-contain cursor-pointer'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
