import { motion } from 'framer-motion';

const logos = [
  '/logo/logo1.svg',
  '/logo/logo2.svg',
  '/logo/logo4.svg',
  '/logo/logo5.svg',
  '/logo/logo9.svg',
  '/logo/logo6.svg',
  '/logo/logo3.svg',
  '/logo/logo7.svg',
  '/logo/logo8.svg',
  '/logo/logo10.svg',
];

const repeatCount = 10;

const LogoMarquee = () => {
  return (
    <div className='relative flex overflow-hidden bg-white py-1 border-y border-gray/50'>
      <motion.div
        className='flex justify-center items-center gap-8 min-w-max'
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 120 }}
      >
        {Array.from({ length: repeatCount }, () => logos).flat().map((logo, index) => (
          <div key={index} className='w-32 h-16 flex items-center justify-center'>
            <img src={logo} alt={`logo-${index}`} className='h-full object-contain' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;
