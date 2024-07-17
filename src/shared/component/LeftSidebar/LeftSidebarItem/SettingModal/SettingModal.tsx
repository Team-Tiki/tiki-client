import { HTMLAttributes } from 'react';

import { containerStyle } from '@/shared/component/LeftSidebar/LeftSidebarItem/SettingModal/SettingModal.style';

interface SettingModalProps extends HTMLAttributes<HTMLDivElement> {
  setOpen: boolean;
}

const SettingModal = ({ setOpen, ...props }: SettingModalProps) => {
  return (
    <div css={containerStyle(setOpen)} {...props}>
      <div>로그아웃</div>
      <div>비밀번호 재설정</div>
    </div>
  );
};

export default SettingModal;
