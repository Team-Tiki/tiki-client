import { Button, Flex, Heading, Text } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { pageStyle, textStyle } from '@/page/onboarding/index.style';

import { $api } from '@/shared/api/client';
import { STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';
import { useOpenModal } from '@/shared/store/modal';

const OnBoardingPage = () => {
  const navigate = useNavigate();
  const openModal = useOpenModal();

  const handleCreateWorkSpace = () => {
    openModal('create-workspace');
  };

  const { data, isSuccess } = $api.useQuery('get', '/api/v1/members/teams');

  const firstTeam = data?.data?.belongTeamGetResponses[0];

  if (firstTeam && isSuccess) {
    localStorage.setItem(STORAGE_KEY.TEAM_ID, String(firstTeam.id));
    localStorage.setItem(STORAGE_KEY.TEAM_NAME, firstTeam.name);
    navigate(PATH.DASHBOARD);
  }

  return (
    <Flex css={pageStyle}>
      <Heading tag="H5" css={{ fontWeight: 600 }}>
        티키에 오신 것을 환영합니다.
      </Heading>
      <Flex styles={{ direction: 'column', gap: '0.8rem', margin: '2.4rem 0 3.2rem 0', align: 'center' }}>
        <Text tag="body4" css={textStyle}>
          우리 동아리의 워크스페이스를 생성해보세요.
        </Text>
        <Text tag="body4" css={textStyle}>
          이미 생성된 워크스페이스가 있다면 초대 메일을 통해 팀 워크스페이스에 합류할 수 있습니다.
        </Text>
      </Flex>
      <Button size="small" onClick={handleCreateWorkSpace}>
        워크스페이스 생성
      </Button>
    </Flex>
  );
};

export default OnBoardingPage;
