/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';

import { Timeout } from '@/shared/type/time';

export const useTimer = (initialTime: number, message: string) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [remainTime, setRemainTime] = useState(initialTime);
  const ref = useRef<Timeout>();

  /** 메일 발송 클릭 시 트리거되면서 인증 번호 입력칸 킴 */
  const handleTrigger = useCallback(() => {
    setIsTriggered(true);
  }, []);

  /** 인증 메일 발송을 여러 번 클릭 시 시간 초기화 */
  const handleReset = useCallback(() => {
    setRemainTime(initialTime);
  }, []);

  /** 실패 시 인증 번호 입력칸 끄고, 타이머 초기화 */
  const handleFail = useCallback(() => {
    setIsTriggered(false);

    clearInterval(ref.current);
  }, []);

  useEffect(() => {
    if (isTriggered) {
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
    }

    return () => clearInterval(ref.current);
  }, [remainTime, isTriggered]);

  return { remainTime, isTriggered, handleTrigger, handleReset, handleFail };
};
