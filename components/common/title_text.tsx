'use client';

import { motion } from 'framer-motion';

import { textVariant2 } from '@/lib/motion';

export const TitleText: React.FC<{
  title: React.ReactNode;
  textStyles?: string;
}> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`text-[40px] md:text-[64px] mt-[8px] font-bold text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
