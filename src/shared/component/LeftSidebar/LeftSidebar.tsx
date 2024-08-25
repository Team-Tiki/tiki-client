import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addUrl from '@/common/asset/svg/add_2.svg';
import LeftArrow from '@/common/asset/svg/arrow-left.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right.svg?react';
import earthUrl from '@/common/asset/svg/global_2.svg';
import TikiLogo from '@/common/asset/svg/logo_symbol.svg?react';
import Logout from '@/common/asset/svg/logout.svg?react';
import PWResetting from '@/common/asset/svg/password.svg?react';
import settingUrl from '@/common/asset/svg/setting.svg';
import DEFAULT_LOGO from '@/common/asset/svg/teamprofile_2.svg';
import Menu from '@/common/component/Menu/Menu';
import MenuItem from '@/common/component/Menu/MenuItem/MenuItem';
import MenuList from '@/common/component/Menu/MenuList/MenuList';
import Modal from '@/common/component/Modal/Modal';
import { useOverlay } from '@/common/hook';
import { useModal } from '@/common/hook/useModal';
import { useOutsideClick } from '@/common/hook/useOutsideClick';

import {
  arrowBtnStyle,
  containerStyle,
  leftSidebarMenuStyle,
  tikiLogoStyle,
} from '@/shared/component/LeftSidebar/LeftSidebar.style';
import LeftSidebarMenuItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarMenuItem';
import WorkSpaceCategory from '@/shared/component/createWorkSpace/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/createWorkSpace/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/createWorkSpace/name/WorkSpaceName';
import { PATH } from '@/shared/constant/path';
import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { useLogout } from '@/shared/hook/common/useLogout';
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

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [fileUrlData, setFileUrlData] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const { mutate: postTeamMutate } = usePostTeamMutation();

  const { setTeamId } = useTeamIdAction();

  const { logout } = useLogout();

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
        {isNavOpen ? (
          <LeftArrow css={arrowBtnStyle} onClick={close} />
        ) : (
          <RightArrow css={arrowBtnStyle} onClick={open} />
        )}
        <TikiLogo css={tikiLogoStyle} />
        <ul css={leftSidebarMenuStyle}>
          <LeftSidebarMenuItem
            isClicked={clicked === 'showcase'}
            isExpanded={isNavOpen}
            logoUrl={earthUrl}
            onClick={handleShowcaseClick}>
            Showcase
          </LeftSidebarMenuItem>
          {data?.data.belongTeamGetResponses.map((data: Team) => {
            return (
              <LeftSidebarMenuItem
                key={data.id}
                isClicked={clicked === String(data.id)}
                isExpanded={isNavOpen}
                logoUrl={data.iconImageUrl ? data.iconImageUrl : DEFAULT_LOGO}
                onClick={() => {
                  handleTeamClick(String(data.id));
                }}>
                {data.name}
              </LeftSidebarMenuItem>
            );
          })}
          <LeftSidebarMenuItem
            isClicked={isWorkspaceClicked}
            isExpanded={isNavOpen}
            logoUrl={addUrl}
            onClick={handleWorkspaceClick}>
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
        <MenuList variant="primary" isOpen={isSettingOpen}>
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
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </aside>
  );
};

export default LeftSidebar;
