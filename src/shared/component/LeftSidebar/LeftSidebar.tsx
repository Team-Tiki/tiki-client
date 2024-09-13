import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addUrl from '@/common/asset/svg/add_2.svg';
import LeftArrow from '@/common/asset/svg/arrow-left.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right.svg?react';
import earthUrl from '@/common/asset/svg/global_2.svg';
import LogoSymbol from '@/common/asset/svg/logo_symbol.svg?react';
import settingUrl from '@/common/asset/svg/setting.svg';
import DEFAULT_LOGO from '@/common/asset/svg/teamprofile_2.svg';
import { useOverlay } from '@/common/hook';
import { useOutsideClick } from '@/common/hook/useOutsideClick';

import {
  LogoSymbolStyle,
  arrowStyle,
  containerStyle,
  leftSidebarListStyle,
  settingStyle,
} from '@/shared/component/LeftSidebar/LeftSidebar.style';
import LeftSidebarItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarItem';
import SettingMenu from '@/shared/component/LeftSidebar/LeftSidebarItem/SettingMenu/SettingMenu';
import { PATH } from '@/shared/constant/path';
import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { useModalActions } from '@/shared/store/modal';
import { useTeamStore } from '@/shared/store/team';
import { Team } from '@/shared/type/team';

const LeftSidebar = () => {
  const { openModal } = useModalActions();
  const { isOpen: isNavOpen, close, open } = useOverlay();

  const sidebarRef = useOutsideClick(close);

  const { data } = useClubInfoQuery();

  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState<string>('showcase');

  const { isOpen: isSettingOpen, close: onSettingClose, toggle } = useOverlay();
  const settingRef = useOutsideClick(onSettingClose);

  const { setTeamId } = useTeamStore();

  useEffect(() => {
    const teamId = localStorage.getItem('teamId');
    if (teamId) {
      setTeamId(teamId);
      setSelectedId(teamId);
      navigate(`${PATH.ARCHIVING}?teamId=${teamId}`);
    } else {
      setSelectedId('showcase');
    }
  }, [setTeamId, navigate]);

  const handleItemClick = (id: string, path: string) => {
    setSelectedId(id);
    if (id !== 'showcase') {
      setTeamId(id);
      localStorage.setItem('teamId', id);
    } else {
      localStorage.removeItem('teamId');
    }
    navigate(path);
    close();
  };

  const handleWorkspaceClick = () => {
    openModal('create-workspace');
  };

  return (
    <aside css={containerStyle} ref={sidebarRef}>
      {isNavOpen ? <LeftArrow css={arrowStyle} onClick={close} /> : <RightArrow css={arrowStyle} onClick={open} />}
      <LogoSymbol css={LogoSymbolStyle} />
      <nav>
        <ul css={leftSidebarListStyle}>
          <LeftSidebarItem
            isClicked={selectedId === 'showcase'}
            isExpansion={isNavOpen}
            url={earthUrl}
            onClick={() => handleItemClick('showcase', PATH.SHOWCASE)}>
            Showcase
          </LeftSidebarItem>
          {data?.data.belongTeamGetResponses.map((data: Team) => (
            <LeftSidebarItem
              key={data.id}
              isClicked={selectedId === String(data.id)}
              isExpansion={isNavOpen}
              url={data.iconImageUrl ? data.iconImageUrl : DEFAULT_LOGO}
              onClick={() => handleItemClick(String(data.id), `${PATH.ARCHIVING}?teamId=${data.id}`)}>
              {data.name}
            </LeftSidebarItem>
          ))}
          <LeftSidebarItem isClicked={false} isExpansion={isNavOpen} url={addUrl} onClick={handleWorkspaceClick}>
            워크스페이스 생성
          </LeftSidebarItem>
        </ul>
      </nav>

      <div ref={settingRef} css={settingStyle}>
        <LeftSidebarItem
          isClicked={false}
          isExpansion={isNavOpen}
          url={settingUrl}
          onClick={() => {
            toggle();
            close();
          }}>
          환경설정
        </LeftSidebarItem>
        <SettingMenu isModalOpen={isSettingOpen} />
      </div>
    </aside>
  );
};

export default LeftSidebar;
