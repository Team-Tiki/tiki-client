import { IcTikiLogo } from '@tiki/icon';
import { Divider, Flex, ToolTip, theme } from '@tiki/ui';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addUrl from '@/common/asset/svg/ic_add.svg';
import avatarUrl from '@/common/asset/svg/ic_avatar.svg';
import globalUrl from '@/common/asset/svg/ic_global.svg';

import Item from '@/shared/component/SideNavBar/Item/Item';
import { containerStyle, settingStyle, tikiLogoStyle } from '@/shared/component/SideNavBar/SideNavBar.style';
import { PATH } from '@/shared/constant/path';
import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { useOpenModal } from '@/shared/store/modal';
import { Team } from '@/shared/type/team';

const SideNavBar = () => {
  const { data } = useClubInfoQuery();

  const [selectedId, setSelectedId] = useState('showcase');

  const navigate = useNavigate();

  const openModal = useOpenModal();

  const handleItemClick = (id: string, path: string) => {
    setSelectedId(id);

    if (id === 'showcase') {
      navigate(path);
    } else {
      navigate(path);
      localStorage.setItem('teamId', id);
    }
    close();
  };

  const handleWorkspaceClick = () => {
    openModal('create-workspace');
  };

  return (
    <nav css={containerStyle}>
      <IcTikiLogo css={tikiLogoStyle} />
      <Flex tag="ul" styles={{ direction: 'column', align: 'center' }}>
        <Item
          logoUrl={globalUrl}
          isClicked={selectedId === 'showcase'}
          onLogoClick={() => handleItemClick('showcase', PATH.SHOWCASE)}
          hoverMessage={'showcase'}
        />
        <Divider type="horizontal" size={56.78} color={theme.colors.gray_300} />
        {data?.belongTeamGetResponses.map((data: Team) => {
          return (
            <Item
              key={data.id}
              isClicked={selectedId === String(data.id)}
              logoUrl={data.iconImageUrl}
              onLogoClick={() => handleItemClick(String(data.id), `${PATH.DASHBOARD}?teamId=${data.id}`)}
              hoverMessage={data.name}
            />
          );
        })}
        <Item
          logoUrl={addUrl}
          isClicked={false}
          onLogoClick={handleWorkspaceClick}
          hoverMessage={'새로운 워크스페이스 생성'}
        />
        <Flex css={settingStyle}>
          <ToolTip message={'내 정보 수정하기'} position="right" gap={0.8}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                alert('현재 준비중인 기능입니다.');
              }}
              onKeyDown={() => {
                alert('현재 준비중인 기능입니다.');
              }}>
              <img src={avatarUrl} alt="버튼 아이콘" />
            </div>
          </ToolTip>
        </Flex>
      </Flex>
    </nav>
  );
};

export default SideNavBar;
