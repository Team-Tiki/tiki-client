import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addUrl from '@/common/asset/svg/ic_add.svg';
import avatarUrl from '@/common/asset/svg/ic_avatar.svg';
import defaultLogo from '@/common/asset/svg/ic_folder.svg';
import globalUrl from '@/common/asset/svg/ic_global.svg';
import TikiLogo from '@/common/asset/svg/ic_tiki_logo.svg?react';
import Divider from '@/common/component/Divider/Divider';
import Flex from '@/common/component/Flex/Flex';
import { theme } from '@/common/style/theme/theme';

import Item from '@/shared/component/SideNavBar/Item/Item';
import { containerStyle, settingStyle, tikiLogoStyle } from '@/shared/component/SideNavBar/SideNavBar.style';
import { PATH } from '@/shared/constant/path';
import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { useOpenModal } from '@/shared/store/modal';
import { Team } from '@/shared/type/team';

const SideNavBar = () => {
  const { data } = useClubInfoQuery();

  const [selectedId, setSelectedId] = useState<string>('showcase');

  const navigate = useNavigate();

  const openModal = useOpenModal();

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
    <aside css={containerStyle}>
      <TikiLogo css={tikiLogoStyle} />
      <Flex tag="nav" styles={{ direction: 'column', align: 'center' }}>
        <Item
          logoUrl={globalUrl}
          isClicked={selectedId === 'showcase'}
          onClick={() => handleItemClick('showcase', PATH.SHOWCASE)}
          hoverMessage={'showcase'}
        />
        <Divider type="horizontal" size={57.89} color={theme.colors.gray_300} />
        <ul>
          {data?.data.belongTeamGetResponses.map((data: Team) => {
            return (
              <Item
                key={data.id}
                isClicked={selectedId === String(data.id)}
                logoUrl={data.iconImageUrl ? data.iconImageUrl : defaultLogo}
                onClick={() => handleItemClick(String(data.id), `${PATH.ARCHIVING}?teamId=${data.id}`)}
                hoverMessage={data.name}
              />
            );
          })}
          <Item
            logoUrl={addUrl}
            isClicked={false}
            onClick={handleWorkspaceClick}
            hoverMessage={'새로운 워크스페이스 생성'}
          />
        </ul>

        <Item
          logoUrl={avatarUrl}
          isClicked={false}
          onClick={() => {}}
          hoverMessage={'내 정보 변경'}
          css={settingStyle}
        />
      </Flex>
    </aside>
  );
};

export default SideNavBar;
