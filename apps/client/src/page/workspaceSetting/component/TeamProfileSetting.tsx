import { Button, Flex, Text } from '@tiki/ui';

import { teamImageStyle, teamImageTextStyle } from '@/page/workspaceSetting/styles';

import { useCloseModal, useOpenModal } from '@/shared/store/modal';

interface TeamProfileSettingProps {
  teamIconUrl: string;
  teamName: string;
  onWorkspaceDataChange: (key: string, value: string) => void;
}

const TeamProfileSetting = ({ teamIconUrl, teamName, onWorkspaceDataChange }: TeamProfileSettingProps) => {
  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const handleTeamIconDelete = () => {
    onWorkspaceDataChange('teamIconUrl', '');
    closeModal();
  };

  const handleTeamIconUpload = (teamIconUrl: string) => {
    onWorkspaceDataChange('teamIconUrl', teamIconUrl);
    closeModal();
  };

  return (
    <Flex styles={{ direction: 'column', gap: '1.2rem' }}>
      <Flex styles={{ direction: 'column', gap: '0.4rem' }}>
        <Text tag="body6">팀 대표 이미지</Text>
        <Text tag="body9" css={teamImageTextStyle}>
          최소 360x360px 크기의 PNG 혹은 JPG 파일만 업로드 가능합니다.
        </Text>
      </Flex>

      <Flex styles={{ align: 'center', gap: '1.2rem' }}>
        {teamIconUrl ? (
          <img src={teamIconUrl} alt="팀 대표" css={teamImageStyle} />
        ) : (
          <Flex styles={{ justify: 'center', align: 'center' }} css={[teamImageStyle, teamImageTextStyle]}>
            {teamName[0]}
          </Flex>
        )}
        <Flex styles={{ gap: '0.4rem' }}>
          <Button
            variant="outline"
            size="small"
            onClick={() =>
              openModal('deleted', {
                title: '대표 이미지를 삭제할까요?',
                content: '',
                isTitleOnly: true,
                onClick: handleTeamIconDelete,
              })
            }>
            삭제
          </Button>
          <Button
            variant="outline"
            size="small"
            onClick={() => openModal('image', { onImageUpload: handleTeamIconUpload })}>
            업로드
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TeamProfileSetting;
