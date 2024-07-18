/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HTMLAttributes, useEffect } from 'react';
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
  isOpen: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingModal = ({ isOpen, setState, ...props }: SettingModalProps) => {
  const { isOpen: isModalOpen, close, open } = useOverlay();
  const settingRef = useOutsideClick<HTMLUListElement>(close);

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      open();
      setState(false);
    }
  }, [open, isOpen, setState]);

  return (
    <ul ref={settingRef} css={containerStyle(isModalOpen)} {...props}>
      <li
        role="button"
        tabIndex={0}
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
      </li>
      <li
        role="button"
        tabIndex={0}
        css={contentStyle}
        onClick={() => {
          navigate(PATH.PASSWORD_AUTH);
          close();
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
