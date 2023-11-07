import styles from '@/styles';

interface StarterStepsProps {
  text: string;
  number: string;
}

const StarterSteps: React.FC<StarterStepsProps> = ({ text, number }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    {/* number icon */}
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className='font-bold text-[20px] text-white'>{number}</p>
    </div>

    {/* text */}
    <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0]'>
      {text}
    </p>
  </div>
);

export default StarterSteps;
