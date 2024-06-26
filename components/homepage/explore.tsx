'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import styles from '@/styles';

import { explorePlanets } from '@/constants';

import ExploreCard from '@/components/common/explore_card';
import { TitleText } from '@/components/common/title_text';
import { staggerContainer } from '@/lib/motion';
import { AnimatedText } from '@/components/common/animated_text';

const Explore = () => {
  const [active, setActive] = useState('planet-2');

  return (
    <section className={`${styles.paddings} mx-5 md:mx-20`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth}flex flex-col`}
      >
        <AnimatedText
          text={['| The World']}
          className='text-center text-white'
          repeatDelay={100}
        />
        <TitleText
          title={
            <>
              Choose the world you want <br className='md:block hidden' /> to
              explore
            </>
          }
          textStyles='text-center'
        />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {explorePlanets.map((planet, index) => (
            <ExploreCard
              key={planet.id}
              {...planet}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
