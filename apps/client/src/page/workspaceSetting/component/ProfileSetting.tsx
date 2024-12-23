import { Flex, Input, Select, Text } from '@tiki/ui';
import { useOutsideClick, useOverlay } from '@tiki/utils';

import { ERROR_NAME } from '@/page/workspaceSetting/constant';

import { SUPPORTING_TEXT } from '@/shared/constant/form';
import { Validate } from '@/shared/util/validate';

interface ProfileSettingProps {
  nickName: string;
  onWorkspaceDataChange: (key: string, value: string) => void;
  error: string;
  onErrorChange: (key: string, value: string) => void;
}

const ProfileSetting = ({ nickName, onWorkspaceDataChange, error, onErrorChange }: ProfileSettingProps) => {
  const select_options = [{ value: '관리자' }, { value: '임원진' }];
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);

  const handleNameChange = (value: string) => {
    if (Validate.validateLength(value, 32) || Validate.isEmpty(value)) {
      onErrorChange('nicknameError', ERROR_NAME.VALIDATE);
    }

    if (!Validate.validateLength(value, 32)) {
      onErrorChange('nicknameError', ERROR_NAME.OVER_LENGTH);
    }

    onWorkspaceDataChange('nickName', value);
  };

  const defineSupportigtext = (errorName: string) => {
    if (errorName === ERROR_NAME.VALIDATE) {
      return SUPPORTING_TEXT.NICKNAME_NOTICE;
    }
    if (errorName === ERROR_NAME.EMPTY) {
      return SUPPORTING_TEXT.NICKNAME_NOTICE;
    }
    if (errorName === ERROR_NAME.OVER_LENGTH) {
      return SUPPORTING_TEXT.NICKNAME_OVER_LENGTH;
    }
  };

  return (
    <>
      <Text tag="body6">개인 프로필 관리</Text>
      <Flex styles={{ gap: '1.6rem', marginTop: '1.2rem', maxWidth: '68.8rem' }}>
        <Input
          value={nickName}
          supportingText={defineSupportigtext(error)}
          onChange={(event) => handleNameChange(event.target.value)}
          onClick={() => handleNameChange('')}
          placeholder="닉네임"
          isError={error !== ERROR_NAME.VALIDATE}
        />
        <Select
          aria-label={`선택된 직책: ${select_options[0].value}`}
          variant="outline"
          ref={ref}
          isOpen={isOpen}
          placeholder={select_options[0].value}
          onTrigger={toggle}
          options={select_options}
        />
      </Flex>
    </>
  );
};

export default ProfileSetting;
