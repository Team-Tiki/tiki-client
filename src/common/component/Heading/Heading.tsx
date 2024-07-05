import { ComponentPropsWithoutRef } from 'react';

import { headingStyle } from './heading.style';

type headingType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'H7';

interface HeadingProps extends ComponentPropsWithoutRef<'h3'> {
  heading?: headingType;
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

const Heading = ({ heading = 'H3', ...props }: HeadingProps) => {
  const Tag = HeadingTag[heading];

  return (
    <Tag css={headingStyle[heading]} {...props}>
      {props.children}
    </Tag>
  );
};

export default Heading;
