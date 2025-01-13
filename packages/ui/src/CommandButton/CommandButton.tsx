import { SyntheticEvent, useEffect } from "react";

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
  const isMacOS = /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const isCmdPressed = isMacOS ? e.metaKey : e.ctrlKey;

    if (isCommand && isCmdPressed && e.key.toLowerCase() === commandKey.toLowerCase()) {
      e.preventDefault();
      onClick?.(e);
    }
  };

  useEffect(() => {
    const globalKeyDownHandler = (e: KeyboardEvent) => {
      const isCmdPressed = isMacOS ? e.metaKey : e.ctrlKey;

      if (isCommand && isCmdPressed && e.key.toLowerCase() === commandKey.toLowerCase()) {
        e.preventDefault();
        onClick?.(e as unknown as SyntheticEvent);
      }
    };

    window.addEventListener("keydown", globalKeyDownHandler);

    return () => window.removeEventListener("keydown", globalKeyDownHandler);
  }, [commandKey, isCommand, onClick]);

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
