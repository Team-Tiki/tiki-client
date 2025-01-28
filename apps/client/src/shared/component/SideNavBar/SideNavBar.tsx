import { IcAvatar, IcTikiLogo } from '@tiki/icon';
import { Divider, Flex, ToolTip, theme } from '@tiki/ui';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { $api } from '@/shared/api/client';
import Item from '@/shared/component/SideNavBar/Item/Item';
import { containerStyle, settingStyle, tikiLogoStyle } from '@/shared/component/SideNavBar/SideNavBar.style';
import { PATH } from '@/shared/constant/path';
import { useOpenModal } from '@/shared/store/modal';
import { useTeamId, useTeamIdAction } from '@/shared/store/team';
import { Team } from '@/shared/type/team';

const SideNavBar = () => {
  const [isInShowcase, setIsInShowcase] = useState(false);

  const teamId = useTeamId();
  const { setTeamId } = useTeamIdAction();
  const navigate = useNavigate();
  const openModal = useOpenModal();

  const { data } = $api.useQuery('get', '/api/v1/members/teams');

  const handleItemClick = (id: string, path: string) => {
    if (id === 'showcase') {
      setTeamId(null);
      setIsInShowcase(true);
      navigate(path);
    } else {
      setTeamId(+id);
      localStorage.setItem('teamId', id);
      navigate(path);
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
          variant={{ type: 'dashboard', hoverMessage: 'showcase' }}
          isClicked={isInShowcase}
          onLogoClick={() => handleItemClick('showcase', PATH.SHOWCASE)}
        />
        <Divider type="horizontal" size={56.78} color={theme.colors.gray_300} />
        {data?.data?.belongTeamGetResponses.map((data: Team) => {
          return (
            <Item
              key={data.id}
              isClicked={teamId === data.id}
              variant={{ type: 'team', logoUrl: data.iconImageUrl, hoverMessage: data.name }}
              onLogoClick={() => handleItemClick(String(data.id), `${PATH.DASHBOARD}?teamId=${data.id}`)}
            />
          );
        })}
        <Item
          variant={{ type: 'add', hoverMessage: '새로운 워크스페이스 생성' }}
          isClicked={false}
          onLogoClick={handleWorkspaceClick}
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
              <IcAvatar width={32} height={32} />
            </div>
          </ToolTip>
        </Flex>
      </Flex>
    </nav>
  );
};

export default SideNavBar;
