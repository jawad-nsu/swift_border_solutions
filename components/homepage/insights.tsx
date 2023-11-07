'use client';

import { motion } from 'framer-motion';

import styles from '@/styles';

import { staggerContainer } from '@/lib/motion';
import { insights } from '@/constants';
import { AnimatedText } from '@/components/common/animated_text';
import { TitleText } from '@/components/common/title_text';
import InsightCard from '@/components/homepage/insight_card';

const Insights = () => {
  return (
    <section className={`${styles.paddings} mx-5 md:mx-24 relative z-10`}>
      <motion.div variants={staggerContainer}>
        {/* Animated Text */}
        <AnimatedText
          text={['| Insight']}
          className='text-center'
          repeatDelay={100}
        />
        {/* Title */}
        <TitleText title={<>Insight about</>} textStyles='text-center' />
        {/* Cards */}
        <div className='mt-[30px] flex flex-col gap-[30px]'>
          {insights.map((item, index) => (
            <InsightCard key={item.title} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
