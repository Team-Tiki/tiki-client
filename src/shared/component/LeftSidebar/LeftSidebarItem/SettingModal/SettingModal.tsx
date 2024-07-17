import { HTMLAttributes, ReactNode } from 'react';

import { containerStyle } from '@/shared/component/LeftSidebar/LeftSidebarItem/SettingModal/SettingModal.style';

interface SettingModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen: boolean;
}

const SettingModal = ({ isOpen, children, ...props }: SettingModalProps) => {
  return (
    <div css={containerStyle(isOpen)} {...props}>
      {children}
    </div>
  );
};

export default SettingModal;
