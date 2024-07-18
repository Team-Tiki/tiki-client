/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { HTMLAttributes, useEffect } from 'react';
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

interface SettingModalProps extends HTMLAttributes<HTMLUListElement> {
  isModalOpen: boolean;
  setSettingClickState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingModal = ({ isModalOpen, setSettingClickState, ...props }: SettingModalProps) => {
  const { isOpen, close, open } = useOverlay();
  const settingRef = useOutsideClick<HTMLUListElement>(close);

  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen) {
      open;
      console.log(isOpen);
      setSettingClickState(false);
    }
  }, [open, isModalOpen, setSettingClickState]);

  const handleNavClick = (path: string) => {
    navigate(path);
    close();
  };

  const handleLogoutKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      handleNavClick(PATH.LOGIN);
    }
  };

  const handlePwResetKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      handleNavClick(PATH.PASSWORD_AUTH);
    }
  };

  return (
    <ul ref={settingRef} css={containerStyle(isOpen)} {...props}>
      <li
        role="button"
        tabIndex={0}
        css={contentStyle}
        onKeyDown={handleLogoutKeyDown}
        onClick={() => {
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          handleNavClick(PATH.LOGIN);
        }}>
        <Logout width="1.6rem" height="1.6rem" />
        <Text tag="body6" css={textStyle}>
          로그아웃
        </Text>
      </li>
      <li
        role="button"
        tabIndex={0}
        css={contentStyle}
        onKeyDown={handlePwResetKeyDown}
        onClick={() => {
          handleNavClick(PATH.PASSWORD_AUTH);
        }}>
        <PWResetting width="1.6rem" height="1.6rem" />
        <Text tag="body6" css={textStyle}>
          비밀번호 재설정
        </Text>
      </li>
    </ul>
  );
};

export default SettingModal;
