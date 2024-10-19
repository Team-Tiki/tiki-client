import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addUrl from '@/common/asset/svg/ic_add.svg';
import defaultLogo from '@/common/asset/svg/ic_folder.svg';
import earthUrl from '@/common/asset/svg/ic_global.svg';
import LeftArrow from '@/common/asset/svg/ic_left_sm.svg?react';
import Logout from '@/common/asset/svg/ic_logout.svg?react';
import PWResetting from '@/common/asset/svg/ic_password_reset.svg?react';
import RightArrow from '@/common/asset/svg/ic_right_sm.svg?react';
import settingUrl from '@/common/asset/svg/ic_setting.svg';
import TikiLogo from '@/common/asset/svg/logo_symbol.svg?react';
import Menu from '@/common/component/Menu/Menu';
import MenuItem from '@/common/component/Menu/MenuItem/MenuItem';
import MenuList from '@/common/component/Menu/MenuList/MenuList';
import { useOverlay } from '@/common/hook';
import { useOutsideClick } from '@/common/hook/useOutsideClick';

import {
  arrowBtnStyle,
  containerStyle,
  leftSidebarMenuStyle,
  tikiLogoStyle,
} from '@/shared/component/LeftSidebar/LeftSidebar.style';
import LeftSidebarMenuItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarMenuItem';
import { PATH } from '@/shared/constant/path';
import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { useLogout } from '@/shared/hook/common/useLogout';
import { useOpenModal } from '@/shared/store/modal';
import { Team } from '@/shared/type/team';

const LeftSidebar = () => {
  const { logout } = useLogout();

  const openModal = useOpenModal();

  const { isOpen: isNavOpen, close, open } = useOverlay();

  const sidebarRef = useOutsideClick(close);

  const { data } = useClubInfoQuery();

  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState<string>('showcase');

  const { isOpen: isSettingOpen, close: onSettingClose, toggle } = useOverlay();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const teamId = searchParams.get('teamId');
    if (teamId) {
      setSelectedId(teamId);

      navigate(`${PATH.ARCHIVING}?teamId=${teamId}`);
    } else {
      setSelectedId('showcase');
      navigate(PATH.SHOWCASE);
    }
  }, [navigate]);

  const handleItemClick = (id: string, path: string) => {
    setSelectedId(id);

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('teamId', id);

    const hasTeamIdInPath = path.includes('teamId');

    if (!hasTeamIdInPath && id !== 'showcase') {
      navigate(`${path}?${searchParams.toString()}`);
    } else if (id === 'showcase') {
      navigate(PATH.SHOWCASE);
    } else {
      navigate(path);
    }
    close();
  };

  const handleWorkspaceClick = () => {
    openModal('create-workspace');
  };

  return (
    <aside css={containerStyle} ref={sidebarRef}>
      <nav>
        {isNavOpen ? (
          <LeftArrow css={arrowBtnStyle} onClick={close} />
        ) : (
          <RightArrow css={arrowBtnStyle} onClick={open} />
        )}
        <TikiLogo css={tikiLogoStyle} />
        <ul css={leftSidebarMenuStyle}>
          <LeftSidebarMenuItem
            isClicked={selectedId === 'showcase'}
            isExpanded={isNavOpen}
            logoUrl={earthUrl}
            onClick={() => handleItemClick('showcase', PATH.SHOWCASE)}>
            Showcase
          </LeftSidebarMenuItem>
          {data?.data.belongTeamGetResponses.map((data: Team) => {
            return (
              <LeftSidebarMenuItem
                key={data.id}
                isClicked={selectedId === String(data.id)}
                isExpanded={isNavOpen}
                logoUrl={data.iconImageUrl ? data.iconImageUrl : defaultLogo}
                onClick={() => handleItemClick(String(data.id), `${PATH.ARCHIVING}?teamId=${data.id}`)}>
                {data.name}
              </LeftSidebarMenuItem>
            );
          })}
          <LeftSidebarMenuItem isClicked={false} isExpanded={isNavOpen} logoUrl={addUrl} onClick={handleWorkspaceClick}>
            워크스페이스 생성
          </LeftSidebarMenuItem>
        </ul>
      </nav>

      <Menu onClose={onSettingClose}>
        <LeftSidebarMenuItem
          isClicked={false}
          isExpanded={isNavOpen}
          logoUrl={settingUrl}
          onClick={() => {
            toggle();
            close();
          }}>
          환경설정
        </LeftSidebarMenuItem>
        <MenuList variant="primary" isOpen={isSettingOpen} css={{ left: '110%', top: '-20px' }}>
          <MenuItem
            onSelect={() => {
              toggle();
              logout();
            }}
            LeftIcon={<Logout width={16} height={16} />}>
            로그아웃
          </MenuItem>
          <MenuItem
            onSelect={() => {
              toggle();
              navigate(PATH.PASSWORD_RESET);
            }}
            LeftIcon={<PWResetting width={16} height={16} />}>
            비밀번호 재설정
          </MenuItem>
        </MenuList>
      </Menu>
    </aside>
  );
};

export default LeftSidebar;
