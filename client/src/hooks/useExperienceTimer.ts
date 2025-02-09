import { useState, useEffect } from 'react';

export function useExperienceTimer() {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    // May 28th, 2022, 9 AM
    const startDate = new Date('2022-05-28T09:00:00');
    
    const calculateSeconds = () => {
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - startDate.getTime()) / 1000);
      setSeconds(diffInSeconds);
    };

    // Initial calculation
    calculateSeconds();

    // Update every second
    const timer = setInterval(calculateSeconds, 1000);

    return () => clearInterval(timer);
  }, []);

  return seconds;
}
