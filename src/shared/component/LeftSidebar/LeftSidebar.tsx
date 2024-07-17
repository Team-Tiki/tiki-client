import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LeftArrow from '@/common/asset/svg/arrow-left.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right.svg?react';
import LogoSymbol from '@/common/asset/svg/logo_symbol.svg?react';
import Modal from '@/common/component/Modal/Modal';
import { useOverlay } from '@/common/hook';
import { useModal } from '@/common/hook/useModal';
import { useOutsideClick } from '@/common/hook/useOutsideClick';

import {
  LogoSymbolStyle,
  arrowStyle,
  containerStyle,
  leftSidebarListStyle,
  settingStyle,
} from '@/shared/component/LeftSidebar/LeftSidebar.style';
import LeftSidebarItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarItem';
import SettingModal from '@/shared/component/LeftSidebar/LeftSidebarItem/SettingModal/SettingModal';
import WorkSpaceCategory from '@/shared/component/createWorkSpace/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/createWorkSpace/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/createWorkSpace/name/WorkSpaceName';
import { DEFAULT_LOGO } from '@/shared/constant';
import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { Team } from '@/shared/type/team';

const LeftSidebar = () => {
  const { isOpen: isNavOpen, close, open } = useOverlay();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState('');

  const sidebarRef = useOutsideClick(close);

  const { data } = useClubInfoQuery();

  // 모달 관련 코드
  const { isOpen, openModal, closeModal, setCurrentContent, currentContent } = useModal();

  const handleNext1 = () => setCurrentContent(<WorkSpaceCategory onNext={handleNext2} />);
  const handleNext2 = () => setCurrentContent(<WorkSpaceImage onNext={handleNext3} />);
  const handleNext3 = () => setCurrentContent(<WorkSpaceComplete />);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <aside css={containerStyle(isNavOpen)} ref={sidebarRef} onClick={(e) => e.stopPropagation()}>
      {isNavOpen ? <LeftArrow css={arrowStyle} onClick={close} /> : <RightArrow css={arrowStyle} onClick={open} />}
      <LogoSymbol css={LogoSymbolStyle} />
      <nav>
        <ul css={leftSidebarListStyle}>
          <LeftSidebarItem
            isClicked={clicked === 'showcase'}
            isExpansion={isNavOpen}
            url="src/common/asset/svg/earth.svg"
            onClick={() => {
              setClicked('showcase');
              navigate('');
              close();
            }}>
            Showcase
          </LeftSidebarItem>
          {data?.data.belongTeamGetResponses.map((data: Team) => {
            return (
              <LeftSidebarItem
                key={data.id}
                isClicked={clicked === data.name}
                isExpansion={isNavOpen}
                url={data.iconImageUrl ? data.iconImageUrl : DEFAULT_LOGO}
                onClick={() => {
                  setClicked(data.name);
                  navigate('/archiving');
                  close();
                }}>
                {data.name}
              </LeftSidebarItem>
            );
          })}
          <LeftSidebarItem
            isClicked={clicked === '워크스페이스 생성'}
            isExpansion={isNavOpen}
            url="src/common/asset/svg/add.svg"
            onClick={() => {
              setClicked('워크스페이스 생성');
              openModal(<WorkSpaceName onNext={handleNext1} />);
              close();
            }}>
            워크스페이스 생성
          </LeftSidebarItem>
        </ul>
      </nav>
      <div css={settingStyle}>
        <LeftSidebarItem
          isClicked={clicked === '환경설정'}
          isExpansion={isNavOpen}
          url={'src/common/asset/svg/settings.svg'}
          onClick={() => {
            setClicked('환경설정');
            console.log('ddd');
          }}>
          환경설정
        </LeftSidebarItem>
        <SettingModal isOpen={true} css={{ backgroundColor: 'red' }}>
          dddd
        </SettingModal>
      </div>
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </aside>
  );
};

export default LeftSidebar;
