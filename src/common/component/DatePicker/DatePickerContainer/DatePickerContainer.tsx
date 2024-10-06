import { ReactNode, useLayoutEffect, useRef, useState } from 'react';

import { containerStyle } from '@/common/component/DatePicker/DatePickerContainer/DatePickerContainer.style';

export default function DatePickerWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOverFloating, setIsOverFloating] = useState(false);

  useLayoutEffect(() => {
    const currentRectBottom = ref.current?.getBoundingClientRect().bottom || 0;
    const { innerHeight } = window;
    setIsOverFloating(currentRectBottom > innerHeight);
  }, []);

  return (
    <div
      css={containerStyle}
      ref={ref}
      style={isOverFloating ? { bottom: '10px' } : { marginTop: '12px' }} // input 밑에 떨어지게 margin-top 적용
    >
      {children}
    </div>
  );
}
