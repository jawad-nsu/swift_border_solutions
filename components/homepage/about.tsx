'use client';

import { motion } from 'framer-motion';

import styles from '@/styles';
import { AnimatedText } from '../common/animated_text';
import { fadeIn } from '@/lib/motion';

const About = () => {
  return (
    <section className={`w-4/5 mx-auto py-12 relative z-10`}>
      <div className='gradient-02 z-0' />
      <motion.div
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <AnimatedText
          text={['| About PlanetPilot']}
          className='text-center'
          repeatDelay={100}
        />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
        >
          Embark on a cosmic journey with{' '}
          <span className='font-extrabold text-white'>PlanetPilot</span>, your
          guide to the wonders of the solar system. Using{' '}
          <span className='font-extrabold text-white'>NASA's API</span>, we
          bring you real-time data, stunning visuals, and intriguing facts about
          each <span className='font-extrabold text-white'>celestial body</span>
          . Whether you're an astronomer or a curious explorer, join us in
          unraveling the mysteries of the{' '}
          <span className='font-extrabold text-white'>universe</span>. The
          cosmos awaits—start your exploration today!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
