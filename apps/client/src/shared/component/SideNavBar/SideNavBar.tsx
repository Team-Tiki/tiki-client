import { IcAvatar, IcTikiLogo } from '@tiki/icon';
import { Divider, Flex, ToolTip, theme, useToastAction } from '@tiki/ui';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import Item from '@/shared/component/SideNavBar/Item/Item';
import { containerStyle, settingStyle, tikiLogoStyle } from '@/shared/component/SideNavBar/SideNavBar.style';
import { STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';
import { useOpenModal } from '@/shared/store/modal';
import { useTeamId, useTeamIdAction } from '@/shared/store/team';

const SideNavBar = () => {
  const [isInShowcase, setIsInShowcase] = useState(false);

  const teamId = useTeamId();
  const { setTeamId } = useTeamIdAction();
  const navigate = useNavigate();
  const openModal = useOpenModal();
  const { createToast } = useToastAction();

  const { data } = $api.useQuery('get', '/api/v1/members/teams');

  const handleItemClick = (info: components['schemas']['BelongTeamGetResponse'] | null, path: string) => {
    if (info === null) {
      setTeamId(null);
      setIsInShowcase(true);

      navigate(path);
    } else {
      setTeamId(info.id);

      localStorage.setItem(STORAGE_KEY.TEAM_ID, String(info.id));
      localStorage.setItem(STORAGE_KEY.TEAM_NAME, info.name);

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
          onLogoClick={() => createToast('현재 준비중인 기능입니다.', 'default')}
        />
        <Divider type="horizontal" size={56.78} color={theme.colors.gray_300} />
        {data?.data?.belongTeamGetResponses.map((data) => {
          return (
            <Item
              key={data.id}
              isClicked={teamId === data.id}
              variant={{ type: 'team', logoUrl: data.iconImageUrl, hoverMessage: data.name }}
              onLogoClick={() => handleItemClick(data, `${PATH.DASHBOARD}?teamId=${data.id}`)}
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
              onClick={() => createToast('현재 준비중인 기능입니다.', 'default')}
              onKeyDown={() => createToast('현재 준비중인 기능입니다.', 'default')}>
              <IcAvatar width={32} height={32} />
            </div>
          </ToolTip>
        </Flex>
      </Flex>
    </nav>
  );
};

export default SideNavBar;
