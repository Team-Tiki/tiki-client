/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

import Logout from '@/common/asset/svg/logout.svg?react';
import PWResetting from '@/common/asset/svg/password.svg?react';
import Text from '@/common/component/Text/Text';

import {
  containerStyle,
  contentStyle,
  textStyle,
} from '@/shared/component/LeftSidebar/LeftSidebarItem/SettingMenu/SettingMenu.style';
import { PATH } from '@/shared/constant/path';
import { useLogout } from '@/shared/hook/common/useLogout';

interface SettingModalProps extends HTMLAttributes<HTMLUListElement> {
  isModalOpen: boolean;
}

const SettingMenu = ({ isModalOpen, ...props }: SettingModalProps) => {
  const navigate = useNavigate();

  const { logout } = useLogout();

  const handleNavClick = (path: string) => {
    navigate(path);
    close();
  };

  const handleLogoutKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      logout();
    }
  };

  const handlePwResetKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      handleNavClick(PATH.PASSWORD_AUTH);
    }
  };

  return (
    <ul css={containerStyle(isModalOpen)} {...props}>
      <li role="button" tabIndex={0} css={contentStyle} onKeyDown={handleLogoutKeyDown} onClick={logout}>
        <Logout width={16} height={16} />
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
        <PWResetting width={16} height={16} />
        <Text tag="body6" css={textStyle}>
          비밀번호 재설정
        </Text>
      </li>
    </ul>
  );
};

export default SettingMenu;
