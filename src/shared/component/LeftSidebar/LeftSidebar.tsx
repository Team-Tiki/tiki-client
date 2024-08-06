import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addUrl from '@/common/asset/svg/add_2.svg';
import LeftArrow from '@/common/asset/svg/arrow-left.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right.svg?react';
import earthUrl from '@/common/asset/svg/global_2.svg';
import LogoSymbol from '@/common/asset/svg/logo_symbol.svg?react';
import settingUrl from '@/common/asset/svg/setting.svg';
import DEFAULT_LOGO from '@/common/asset/svg/teamprofile_2.svg';
import Modal from '@/common/component/Modal/Modal';
import { useOverlay } from '@/common/hook';
import { useModal } from '@/common/hook/useModal';
import { useOutsideClick } from '@/common/hook/useOutsideClick';

import {
  LogoSymbolStyle,
  arrowStyle,
  containerStyle,
  leftSidebarListStyle,
} from '@/shared/component/LeftSidebar/LeftSidebar.style';
import LeftSidebarItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarItem';
import SettingMenu from '@/shared/component/LeftSidebar/LeftSidebarItem/SettingMenu/SettingMenu';
import WorkSpaceCategory from '@/shared/component/createWorkSpace/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/createWorkSpace/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/createWorkSpace/name/WorkSpaceName';
import { PATH } from '@/shared/constant/path';
import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { useTeamIdAction } from '@/shared/store/team';
import { Team } from '@/shared/type/team';

import { usePostTeamMutation } from '../createWorkSpace/hook/api/usePostTeamMutation';

const LeftSidebar = () => {
  const { isOpen: isNavOpen, close, open } = useOverlay();

  const sidebarRef = useOutsideClick(close);

  const { data, refetch } = useClubInfoQuery();

  const navigate = useNavigate();

  const [clicked, setClicked] = useState('showcase');
  const [isWorkspaceClicked, setIsWorkspaceClicked] = useState(false);

  // 모달 관련 코드
  const { isOpen, openModal, closeModal: closeModalBase, setCurrentContent, currentContent } = useModal();

  const { isOpen: isSettingOpen, close: onSettingClose, toggle } = useOverlay();
  const settingRef = useOutsideClick(onSettingClose);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [fileUrlData, setFileUrlData] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const { mutate: postTeamMutate } = usePostTeamMutation();

  const { setTeamId } = useTeamIdAction();

  useEffect(() => {
    const postData = {
      name: name,
      category: category,
      iconImageUrl: fileUrlData,
    };

    if (isComplete) {
      postTeamMutate(postData, {
        onSuccess: async () => {
          refetch();
          setIsComplete(false);
        },
      });
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isComplete]);

  const handleNext1 = () => setCurrentContent(<WorkSpaceCategory onNext={handleNext2} onCategory={setCategory} />);
  const handleNext2 = () =>
    setCurrentContent(
      <WorkSpaceImage onNext={handleNext3} onFileUrlData={setFileUrlData} isComplete={setIsComplete} />
    );
  const handleNext3 = () => setCurrentContent(<WorkSpaceComplete />);

  const handleShowcaseClick = () => {
    setClicked('showcase');

    setIsWorkspaceClicked(false);
    navigate(PATH.SHOWCASE);

    close();
  };

  const handleTeamClick = (teamId: string) => {
    setClicked(teamId);
    setIsWorkspaceClicked(false); // 워크스페이스 클릭 상태 해제

    setTeamId(teamId);

    navigate(`${PATH.ARCHIVING}?teamId=${teamId}`);

    close();
  };

  const handleWorkspaceClick = () => {
    setIsWorkspaceClicked(true);
    openModal(<WorkSpaceName onNext={handleNext1} setName={setName} />);
  };

  const closeModal = () => {
    closeModalBase();
    setIsWorkspaceClicked(false); // 모달 닫을 때 워크스페이스 클릭 상태 해제
  };

  return (
    <aside css={containerStyle} ref={sidebarRef}>
      <nav>
        {isNavOpen ? <LeftArrow css={arrowStyle} onClick={close} /> : <RightArrow css={arrowStyle} onClick={open} />}
        <LogoSymbol css={LogoSymbolStyle} />
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

      <div ref={settingRef}>
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
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </aside>
  );
};

export default LeftSidebar;
