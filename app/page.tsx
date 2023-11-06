import {
  Navbar,
  Hero,
  About,
  Explore,
  GetStarted,
} from '@/components/homepage';

export default function Home() {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
    </div>
  );
}
