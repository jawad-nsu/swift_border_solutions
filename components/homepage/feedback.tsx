'use client';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer, zoomIn } from '@/lib/motion';
import styles from '@/styles';

const Feedback = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6 `}
      >
        {/* left side text */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className='flex-[0.5] lg:max-w=[370px] flex flex-col justify-end gradient-05 sm:p-8 p-4 border-[1px] border-[#6A6A6A] rounded-[32px] relative'
        >
          <div className='feedback-gradient' />
          <div>
            <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white'>
              Jawad Rahim
            </h4>
            <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white'>
              {' '}
              Founder PlanetPilot
            </p>
          </div>
          <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white'>
            "Discover celestial wonders with PlanetPilot—your guide to the solar
            system. Real-time data, stunning visuals, and cosmic facts at your
            fingertips!"
          </p>
        </motion.div>
        {/* right side image */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='relative flex-1 flex justify-center items-center'
        >
          <img
            src='/planet-09.png'
            alt='planet-09'
            className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
          />
          {/* logo in the middle */}
          <motion.div
            variants={zoomIn(0.4, 1)}
            className='hidden lg:block absolute -left-[10%] top-[3%]'
          >
            <img
              src='/stamp.png'
              alt='stamp'
              className='w-[155px] h-[155px] object-contain'
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
