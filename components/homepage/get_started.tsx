'use client';

import { fadeIn, staggerContainer } from '@/lib/motion';
import styles from '@/styles';
import { motion } from 'framer-motion';
import { planetVariants } from './../../lib/motion';
import { AnimatedText } from '../common/animated_text';
import { TitleText } from '../common/title_text';

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        {/* image */}
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src='/get-started.png'
            alt='get-started'
            className='w-[90%] h-[90%] object-contain'
          />
        </motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] flex justify-center flex-col'
        >
          <AnimatedText text={['| How PlanetPilot Works']} repeatDelay={100} />
          <TitleText title={<>Get Started with a few clicks</>} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
