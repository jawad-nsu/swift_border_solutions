'use client';

import { motion } from 'framer-motion';

import styles from '@/styles';
import { AnimatedText } from '../common/animated_text';
import { slideIn, staggerContainer } from '@/lib/motion';

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pt-12 md:pt-20`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div>
          <section className='flex flex-col items-center justify-center'>
            <AnimatedText
              el='h1'
              text={['celestial']}
              className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] text-white lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase z-10'
              repeatDelay={1400}
            />
            <AnimatedText
              el='h1'
              text={['NAVIGATOR']}
              className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] text-white lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase z-10'
              repeatDelay={2500}
            />
          </section>
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className='relative w-4/5 md:-mt-[20px] -mt-[12px] mx-auto'
          >
            <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />

            <img
              src='/hero-image.jpg'
              alt='hero_cover'
              className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
            />

            {/* <a href='#explore'>
              <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
                <img
                  src='/stamp.png'
                  alt='stamp'
                  className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'
                />
              </div>
            </a> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
