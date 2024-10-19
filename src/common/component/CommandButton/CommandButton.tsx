import { SyntheticEvent } from 'react';

import CommandKey from '@/common/asset/svg/ic_command_key.svg?react';
import { ButtonProps } from '@/common/component/Button/Button';
import { sizeStyle, variantStyle } from '@/common/component/Button/Button.style';
import {
  buttonStyle,
  childrenStyle,
  commonStyle,
  keyStyle,
} from '@/common/component/CommandButton/CommandButton.style';

interface CommandButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'tertiary' | 'outline';
  keyboard: string;
  isCommand?: boolean;
  isFrontIcon?: boolean;
  onClick?: (event: SyntheticEvent) => void;
}

const CommandButton = ({
  variant = 'primary',
  size = 'small',
  keyboard,
  isCommand = true,
  isFrontIcon = false,
  children,
  onClick,
  ...props
}: CommandButtonProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isCommand && e.key === keyboard) {
      onClick?.(e);
    }
  };

  return (
    <button
      type="button"
      css={[buttonStyle(isFrontIcon), variantStyle(variant), sizeStyle(size)]}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...props}>
      <span css={childrenStyle}>{children}</span>
      <div css={[commonStyle, keyStyle(variant)]}>
        {isCommand && <CommandKey />}
        {keyboard}
      </div>
    </button>
  );
};

export default CommandButton;
