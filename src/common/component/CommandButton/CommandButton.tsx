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
}

const CommandButton = ({
  variant = 'primary',
  size = 'small',
  keyboard,
  isCommand = true,
  isFrontIcon = false,
  children,
  ...props
}: CommandButtonProps) => {
  return (
    <button type="button" css={[buttonStyle(isFrontIcon), variantStyle(variant), sizeStyle(size)]} {...props}>
      <span css={childrenStyle}>{children}</span>
      <div css={[commonStyle, keyStyle(variant)]}>
        {isCommand && <CommandKey />}
        {keyboard}
      </div>
    </button>
  );
};

export default CommandButton;
