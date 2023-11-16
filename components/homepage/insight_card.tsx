'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/motion';

interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const InsightCard: React.FC<InsightCardProps> = ({
  imgUrl,
  title,
  subtitle,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className='flex flex-col md:flex-row gap-4'
    >
      {/* img */}
      <img
        src={imgUrl}
        alt='planet'
        className='h-[250px] w-full md:w-[270px] rounded-[32px] object-cover'
      />
      <div className='w-full flex justify-between items-center'>
        <div className='flex flex-col flex-1 md:ml[62px] max-w-[650px]'>
          {/* title */}
          <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>
            {title}
          </h4>
          {/* subtitle */}
          <p className='mt-[16px] font-normal text-[14px] text-white lg:text-[20px] text-secondary-white'>
            {subtitle}
          </p>
        </div>
        {/* open in new tab arrow */}
        <div className='hidden lg:flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white cursor-pointer'>
          <img
            src='/arrow.svg'
            alt='arrow'
            className='w-[40%] h-[40%] object-contain'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
