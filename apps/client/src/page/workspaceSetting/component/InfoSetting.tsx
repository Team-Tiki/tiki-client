import { Flex, Input, Select, Text } from '@tiki/ui';
import { useOutsideClick, useOverlay } from '@tiki/utils';

import { containerStyle } from '@/page/workspaceSetting/component/styles';
import { ERROR_NAME } from '@/page/workspaceSetting/constant';
import { hasRecentUpdates } from '@/page/workspaceSetting/util';

import { SUPPORTING_TEXT } from '@/shared/constant/form';
import { Validate } from '@/shared/util/validate';

interface InfoSettingProps {
  teamName: string;
  namingUpdatedAt: string;
  onWorkspaceDataChange: (key: string, value: string) => void;
  error: string;
  onErrorChange: (key: string, value: string) => void;
}
const select_options = [{ value: '건국대학교' }];

const InfoSetting = ({ teamName, namingUpdatedAt, onWorkspaceDataChange, error, onErrorChange }: InfoSettingProps) => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);

  const canChangeTeamName = hasRecentUpdates(namingUpdatedAt ?? '');

  const handleNameChange = (value: string) => {
    if (Validate.validateLength(value, 30) || Validate.isEmpty(value)) {
      onErrorChange('workspaceNameError', ERROR_NAME.VALIDATE);
    }

    if (!Validate.validateLength(value, 30)) {
      onErrorChange('workspaceNameError', ERROR_NAME.OVER_LENGTH);
    }

    onWorkspaceDataChange('teamName', value);
  };

  const defineSupportigtext = (errorName: string) => {
    switch (errorName) {
      case ERROR_NAME.VALIDATE:
        return SUPPORTING_TEXT.WORKSPACE_NAME_NOTICE;

      case ERROR_NAME.EMPTY:
        return SUPPORTING_TEXT.WORKSPACE_NAME_EMPTY;

      case ERROR_NAME.OVER_LENGTH:
        return SUPPORTING_TEXT.WORKSPACE_NAME_INVALID_LENGTH;
    }
  };

  return (
    <section css={containerStyle}>
      <Text tag="body6">워크스페이스 관리</Text>
      <Flex styles={{ gap: '1.6rem', marginTop: '1.2rem', maxWidth: '68.8rem' }}>
        <Input
          value={teamName}
          isDisabled={!canChangeTeamName}
          supportingText={defineSupportigtext(error)}
          onChange={(event) => handleNameChange(event.target.value)}
          onClick={() => handleNameChange('')}
          placeholder="ex. 동아리명"
          isError={error !== ERROR_NAME.VALIDATE}
        />
        <Select
          aria-label={`선택된 아이템: ${teamName}`}
          variant="disabled"
          ref={ref}
          isOpen={isOpen}
          placeholder={select_options[0].value}
          onTrigger={toggle}
          options={select_options}
        />
      </Flex>
    </section>
  );
};

export default InfoSetting;
