'use client';

import { fadeIn, staggerContainer } from '@/lib/motion';
import styles from '@/styles';
import { motion } from 'framer-motion';
import { planetVariants } from './../../lib/motion';
import { AnimatedText } from '../common/animated_text';
import { TitleText } from '../common/title_text';
import { startingFeatures } from '@/constants';
import StarterSteps from '@/components/homepage/starter_steps';

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} mx-5 md:mx-24 relative z-10`}>
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
          className='flex-[.85] flex justify-center flex-col'
        >
          <AnimatedText text={['| How PlanetPilot Works']} repeatDelay={100} />
          <TitleText
            title={<>Get Started with just a few clicks</>}
            textStyles='max-w-[35rem]'
          />
          <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
            {startingFeatures.map((feature, index) => (
              <StarterSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
