'use client';

import styles from '@/styles';

interface NewFeaturesProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures: React.FC<NewFeaturesProps> = ({
  imgUrl,
  title,
  subtitle,
}) => {
  return (
    <div className='flex-1 flex flex-col sm:max-w-[250px] md:min-w-[210px]'>
      {/* icon */}
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <img src={imgUrl} alt='icon' className='w-1/2 h-1/2 object-contain' />
      </div>
      {/* title */}
      <div className='mt-[26px] font-bold text-[24px] leading-[30.24px] text-white'>
        {title}
      </div>
      {/* subtitle */}
      <div className='flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0]'>
        {subtitle}
      </div>
    </div>
  );
};

export default NewFeatures;
