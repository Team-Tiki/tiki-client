/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HTMLAttributes, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logout from '@/common/asset/svg/logout.svg?react';
import PWResetting from '@/common/asset/svg/password.svg?react';
import Text from '@/common/component/Text/Text';
import { useOutsideClick, useOverlay } from '@/common/hook';

import {
  containerStyle,
  contentStyle,
  textStyle,
} from '@/shared/component/LeftSidebar/LeftSidebarItem/SettingModal/SettingModal.style';
import { ACCESS_TOKEN_KEY } from '@/shared/constant/api';
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
      <button
        css={contentStyle}
        onClick={() => {
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          navigate(PATH.LOGIN);
          close();
        }}>
        <Logout width="1.6rem" height="1.6rem" />
        <Text tag="body6" css={textStyle}>
          로그아웃
        </Text>
      </button>

      <button
        css={contentStyle}
        onClick={() => {
          navigate(PATH.PASSWORD_AUTH);
          close();
        }}>
        <PWResetting width="1.6rem" height="1.6rem" />
        <Text tag="body6" css={textStyle}>
          비밀번호 재설정
        </Text>
      </button>
    </div>
  );
};

export default SettingModal;
