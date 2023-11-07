'use client';

import { fadeIn, staggerContainer } from '@/lib/motion';
import styles from '@/styles';
import { motion } from 'framer-motion';
import { planetVariants } from './../../lib/motion';
import { AnimatedText } from '../common/animated_text';
import { TitleText } from '../common/title_text';
import { newFeatures } from '@/constants';
import NewFeatures from './new_features';

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} mx-5 md:mx-20`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        {/* text */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className='flex-[.95] flex justify-center flex-col'
        >
          <AnimatedText text={['| Whats new?']} repeatDelay={100} />
          <TitleText
            title={<>Whats new about PlanetPilot?</>}
            textStyles='max-w-[35rem]'
          />
          <div className='mt-8 flex flex-wrap justify-between gap-[24px]'>
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        {/* image */}
        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src='/whats-new.png'
            alt='whats-new'
            className='w-[90%] h-[90%] object-contain'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
