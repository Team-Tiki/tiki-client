import { PropsWithChildren } from 'react';

import { selectTriggerStyle } from '@/page/signUp/info/component/InfoForm/InfoForm.style';

interface UnivSelectTriggerButtonProps extends PropsWithChildren {
  isError?: boolean;
  onOpen?: () => void;
  onSelectClick?: () => void;
}

const UnivSelectTriggerButton = ({
  isError = false,
  onOpen,
  onSelectClick,
  children,
}: UnivSelectTriggerButtonProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      css={selectTriggerStyle(isError)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onOpen?.();
        }
      }}
      onClick={onSelectClick}>
      {children}
    </div>
  );
};

export default UnivSelectTriggerButton;
