import { ComponentPropsWithRef } from 'react';

type ButtonProps = ComponentPropsWithRef<'button'>;

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
