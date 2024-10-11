import { ComponentPropsWithRef, forwardRef } from 'react';

import { containerStyle } from '@/common/component/DatePicker/DatePickerContainer/DatePickerContainer.style';

const DatePickerContainer = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(({ children }, ref) => (
  <div ref={ref} css={containerStyle}>
    {children}
  </div>
));

export default DatePickerContainer;
