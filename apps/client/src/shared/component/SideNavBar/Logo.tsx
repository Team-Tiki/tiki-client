import { Flex, ToolTip } from '@tiki/ui';
import { motion } from 'framer-motion';

import { PropsWithChildren, useState } from 'react';
import { Link } from 'react-router-dom';

import { indicatorStyle, itemStyle, pageIndicatorStyle } from '@/shared/component/SideNavBar/index.style';

interface LogoProps extends PropsWithChildren {
  to: string;
  name?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Logo = ({ to, name = '', onClick, isActive = false, children }: LogoProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Flex tag="li" styles={{ align: 'center', justify: 'center' }}>
      {isActive && (
        <motion.div layoutId="snb_indicator" css={[pageIndicatorStyle(isActive, isHover), indicatorStyle]} />
      )}
      <ToolTip message={name} position="right" gap={0.8}>
        <Link
          to={to}
          onClick={onClick}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          css={itemStyle(isActive)}>
          {children}
        </Link>
      </ToolTip>
    </Flex>
  );
};

export default Logo;
