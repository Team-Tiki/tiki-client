import { SyntheticEvent } from "react";

import { ButtonProps } from "@/Button/Button";
import { variantStyle } from "@/Button/Button.style";
import { buttonStyle, childrenStyle, commonStyle, keyStyle, sizeStyle } from "@/CommandButton/CommandButton.style";
import { IcCommandKey } from "@tiki/icon";

export interface CommandButtonProps extends ButtonProps {
  variant?: Extract<ButtonProps["variant"], "primary" | "tertiary" | "fourth" | "outline">;
  size?: Extract<ButtonProps["size"], "large" | "small" | "xSmall">;
  commandKey: string;
  isCommand?: boolean;
  isFrontIcon?: boolean;
  onClick?: (event: SyntheticEvent) => void;
}

const CommandButton = ({
  variant = "primary",
  size = "small",
  commandKey,
  isCommand = true,
  isFrontIcon = false,
  children,
  onClick,
  ...props
}: CommandButtonProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (isCommand && e.key === commandKey) {
      e.preventDefault();

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
      {...props}
    >
      <span css={childrenStyle}>{children}</span>
      <div css={[commonStyle, keyStyle(variant)]}>
        {isCommand && <IcCommandKey width={10} height={10} />}
        {commandKey}
      </div>
    </button>
  );
};

export default CommandButton;
