import { useEffect, useState } from 'react';

export const useTimer = (initialTime: number, message: string) => {
  const [remainTime, setRemainTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainTime > 0) {
        setRemainTime((prevTime) => prevTime - 1);
      } else {
        setRemainTime(initialTime);

        alert(message);

        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainTime, message, initialTime]);

  return { remainTime };
};
