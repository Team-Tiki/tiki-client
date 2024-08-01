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
import { useToggleModal } from '@/shared/store/modal';
import { useTeamStore } from '@/shared/store/team';
import { Team } from '@/shared/type/team';
import { ModalManager } from '@/shared/util/modal';

const LeftSidebar = () => {
  const { isOpen: isNavOpen, close, open } = useOverlay();

  const sidebarRef = useOutsideClick(close);

  const { data } = useClubInfoQuery();

  const navigate = useNavigate();

  const [clicked, setClicked] = useState('showcase');
  const [isWorkspaceClicked, setIsWorkspaceClicked] = useState(false);

  const { isOpen: isSettingOpen, close: onSettingClose, toggle } = useOverlay();
  const settingRef = useOutsideClick(onSettingClose);

  const { setTeamId } = useTeamStore();

  useEffect(() => {
    const teamId = localStorage.getItem('teamId');
    if (teamId) {
      setTeamId(teamId);
      setClicked(teamId);
      navigate(`${PATH.ARCHIVING}?teamId=${teamId}`);
    }
  }, [setTeamId, navigate]);

  const handleShowcaseClick = () => {
    setClicked('showcase');
    localStorage.removeItem('teamId');
    setIsWorkspaceClicked(false);
    navigate(PATH.SHOWCASE);
    close();
  };

  const handleTeamClick = (teamId: string) => {
    setClicked(teamId);
    setIsWorkspaceClicked(false); // 워크스페이스 클릭 상태 해제

    setTeamId(teamId);
    localStorage.setItem('teamId', teamId);

    navigate(`${PATH.ARCHIVING}?teamId=${teamId}`);
    close();
  };

  const toggleModal = useToggleModal();

  const handleWorkspaceClick = () => {
    setIsWorkspaceClicked(true);
    toggleModal('workspace');
  };

  const handleModalClose = () => {
    setIsWorkspaceClicked(false); // 모달 닫을 때 워크스페이스 클릭 상태 해제
  };

  return (
    <aside css={containerStyle} ref={sidebarRef}>
      {isNavOpen ? <LeftArrow css={arrowStyle} onClick={close} /> : <RightArrow css={arrowStyle} onClick={open} />}
      <LogoSymbol css={LogoSymbolStyle} />
      <nav>
        <ul css={leftSidebarListStyle}>
          <LeftSidebarItem
            isClicked={clicked === 'showcase'}
            isExpansion={isNavOpen}
            url={earthUrl}
            onClick={handleShowcaseClick}>
            Showcase
          </LeftSidebarItem>
          {data?.data.belongTeamGetResponses.map((data: Team) => {
            return (
              <LeftSidebarItem
                key={data.id}
                isClicked={clicked === String(data.id)}
                isExpansion={isNavOpen}
                url={data.iconImageUrl ? data.iconImageUrl : DEFAULT_LOGO}
                onClick={() => {
                  handleTeamClick(String(data.id));
                }}>
                {data.name}
              </LeftSidebarItem>
            );
          })}
          <LeftSidebarItem
            isClicked={isWorkspaceClicked}
            isExpansion={isNavOpen}
            url={addUrl}
            onClick={handleWorkspaceClick}>
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
      <ModalManager onClose={handleModalClose} />
    </aside>
  );
};

export default LeftSidebar;
