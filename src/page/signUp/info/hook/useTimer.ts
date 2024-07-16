/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';

type Timeout = ReturnType<typeof setTimeout>;
export const useTimer = (initialTime: number, message: string) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [remainTime, setRemainTime] = useState(initialTime);
  const ref = useRef<Timeout>();

  const handleTrigger = useCallback(() => {
    setIsTriggered(true);
  }, []);

  useEffect(() => {
    ref.current = setInterval(() => {
      if (remainTime > 0) {
        setRemainTime((prevTime) => prevTime - 1);
      } else {
        alert(message);

        setIsTriggered(false);
        setRemainTime(initialTime);

        clearInterval(ref.current);
      }
    }, 1000);

    return () => clearInterval(ref.current);
  }, [remainTime]);

  return { remainTime, isTriggered, handleTrigger };
};
