import { useState, useEffect } from 'react';

export function useExperienceTimer() {
  const [experienceString, setExperienceString] = useState<string>('');

  useEffect(() => {
    // May 28th, 2022, 9 AM
    const startDate = new Date('2022-05-28T09:00:00');

    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const seconds = Math.floor((diff % (1000 * 60 * 60)) / 1000);
      const milliseconds = diff % 1000;

      const formatted = `${String(years).padStart(2, '0')}:${String(months).padStart(2, '0')}:${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;

      setExperienceString(formatted);
    };

    // Initial calculation
    calculateTime();

    // Update every millisecond for smooth counter
    const timer = setInterval(calculateTime, 1);

    return () => clearInterval(timer);
  }, []);

  return experienceString;
}