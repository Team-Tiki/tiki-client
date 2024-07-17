import { EMAIL_EXPIRED } from '@/page/login/constant';

import { useCallback, useRef, useState } from 'react';

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    setTime(initialTime);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          stopTimer();
          alert(EMAIL_EXPIRED);
          return 0;
        }
      });
    }, 1000);
  }, [initialTime, stopTimer]);

  return { time, startTimer, stopTimer };
};

export default useTimer;
