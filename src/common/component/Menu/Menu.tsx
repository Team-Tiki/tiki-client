import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Menu = ({ children, ...props }: MenuProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

export default forwardRef(Menu);
