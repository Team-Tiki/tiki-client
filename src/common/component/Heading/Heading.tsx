import { ComponentPropsWithoutRef } from 'react';

import { headingStyle } from './heading.style';

type HeadingType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'H7';

interface HeadingProps extends ComponentPropsWithoutRef<'h3'> {
  variant?: HeadingType;
}

const HeadingTag = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  H7: 'h6',
} as const;

const Heading = ({ variant = 'H3', ...props }: HeadingProps) => {
  const Tag = HeadingTag[variant];

  return (
    <Tag css={headingStyle[variant]} {...props}>
      {props.children}
    </Tag>
  );
};

export default Heading;
