import { Flex, Input, Select, Text } from '@tiki/ui';

import { containerStyle } from '@/page/workspaceSetting/component/styles';
import { ERROR_NAME, MAX_WORKSPACE_NAME_LENGTH, UNIVERCITY_SELECT_OPTIONS } from '@/page/workspaceSetting/constant';
import { defineWorkspaceNameSupportingtext, hasRecentUpdates } from '@/page/workspaceSetting/util';

import { Validate } from '@/shared/util/validate';

interface InfoSettingProps {
  teamName: string;
  namingUpdatedAt: string;
  onWorkspaceDataChange: (key: string, value: string) => void;
  error: string;
  onErrorChange: (key: string, value: string) => void;
}

const InfoSetting = ({ teamName, namingUpdatedAt, onWorkspaceDataChange, error, onErrorChange }: InfoSettingProps) => {
  const canChangeTeamName = hasRecentUpdates(namingUpdatedAt ?? '');

  const handleNameChange = (value: string) => {
    if (Validate.validateLength(value, MAX_WORKSPACE_NAME_LENGTH) || Validate.isEmpty(value)) {
      onErrorChange('workspaceNameError', ERROR_NAME.VALIDATE);
    }

    if (!Validate.validateLength(value, MAX_WORKSPACE_NAME_LENGTH)) {
      onErrorChange('workspaceNameError', ERROR_NAME.OVER_LENGTH);
    }

    onWorkspaceDataChange('teamName', value);
  };

  return (
    <section css={containerStyle}>
      <Text tag="body6">워크스페이스 관리</Text>
      <Flex styles={{ gap: '1.6rem', marginTop: '1.2rem', maxWidth: '68.8rem' }}>
        <Input
          value={teamName}
          disabled={!canChangeTeamName}
          supportingText={defineWorkspaceNameSupportingtext(error)}
          onChange={(event) => handleNameChange(event.target.value)}
          placeholder="ex. 동아리명"
          isError={error !== ERROR_NAME.VALIDATE}
        />
        <Select
          aria-label={`선택된 아이템: ${teamName}`}
          variant="disabled"
          placeholder={UNIVERCITY_SELECT_OPTIONS[0].value}
          options={UNIVERCITY_SELECT_OPTIONS}
        />
      </Flex>
    </section>
  );
};

export default InfoSetting;
