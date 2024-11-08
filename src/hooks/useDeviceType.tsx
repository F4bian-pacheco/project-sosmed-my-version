import { useState, useEffect } from 'react';

const useDeviceType = (): 'mobile' | 'desktop' => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? 'mobile' : 'desktop';
};

export default useDeviceType;
