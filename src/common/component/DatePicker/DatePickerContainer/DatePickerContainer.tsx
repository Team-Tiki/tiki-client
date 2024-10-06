import { ReactNode, forwardRef } from 'react';

import { containerStyle } from '@/common/component/DatePicker/DatePickerContainer/DatePickerContainer.style';

interface DatePickerContainerProps {
  children: ReactNode;
}

const DatePickerContainer = forwardRef<HTMLDivElement, DatePickerContainerProps>(({ children }, ref) => (
  <div ref={ref} css={containerStyle}>
    {children}
  </div>
));

export default DatePickerContainer;
