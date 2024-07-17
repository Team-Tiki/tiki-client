/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HTMLAttributes, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logout from '@/common/asset/svg/logout.svg?react';
import PWResetting from '@/common/asset/svg/password.svg?react';
import { useOutsideClick, useOverlay } from '@/common/hook';

import {
  containerStyle,
  contentStyle,
  textStyle,
} from '@/shared/component/LeftSidebar/LeftSidebarItem/SettingModal/SettingModal.style';
import { PATH } from '@/shared/constant/path';

interface SettingModalProps extends HTMLAttributes<HTMLDivElement> {
  setOpen: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingModal = ({ setOpen, setState, ...props }: SettingModalProps) => {
  const { isOpen, close, open } = useOverlay();
  const settingRef = useOutsideClick(close);

  const navigate = useNavigate();

  useEffect(() => {
    if (setOpen) {
      open();
      setState(false);
    }
  }, [open, setOpen, setState]);

  return (
    <div ref={settingRef} css={containerStyle(isOpen)} {...props}>
      <button css={contentStyle} onClick={close}>
        <Logout width="1.6rem" height="1.6rem" />
        <p
          css={textStyle}
          onClick={() => {
            console.log('log out');
          }}>
          로그아웃
        </p>
      </button>
      <button css={contentStyle} onClick={close}>
        <PWResetting width="1.6rem" height="1.6rem" />
        <p
          css={textStyle}
          onClick={() => {
            navigate(PATH.PASSWORD_RESET);
          }}>
          비밀번호 재설정
        </p>
      </button>
    </div>
  );
};

export default SettingModal;
