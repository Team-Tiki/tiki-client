import { Flex, Text } from '@tiki/ui';

import { components } from '@/shared/__generated__/schema';
import Logo from '@/shared/component/SideNavBar/Logo';
import { firstSpellStyle } from '@/shared/component/SideNavBar/index.style';
import { STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';
import { useTeamId, useTeamIdAction } from '@/shared/store/team';

type TeamListProps = {
  list?: components['schemas']['BelongTeamsGetResponse'];
};

const TeamList = ({ list }: TeamListProps) => {
  const { setTeamId } = useTeamIdAction();

  const teamId = useTeamId();
  const getIsCurrentTeam = (id: number) => teamId === id;

  return (
    <Flex tag="ul" styles={{ direction: 'column', gap: '4rem', padding: '2rem 0' }}>
      {list?.belongTeamGetResponses.map((data) => {
        return (
          <Logo
            key={data.id}
            to={`${PATH.DASHBOARD}?teamId=${data.id}`}
            name={data.name}
            onClick={() => {
              setTeamId(data.id);
              localStorage.setItem(STORAGE_KEY.TEAM_ID, String(data.id));
              localStorage.setItem(STORAGE_KEY.TEAM_NAME, data.name);
            }}
            isActive={getIsCurrentTeam(data.id)}>
            {data.iconImageUrl ? (
              <img src={data.iconImageUrl} alt={`${data.name} 로고`} />
            ) : (
              <Text tag="body6" css={firstSpellStyle}>
                {data.name[0]}
              </Text>
            )}
          </Logo>
        );
      })}
    </Flex>
  );
};

export default TeamList;
