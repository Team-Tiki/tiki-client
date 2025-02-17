import { Flex, Input, Select, Text } from '@tiki/ui';
import { useOutsideClick } from '@tiki/utils';

import { ERROR_NAME, MAX_NAME_LENGTH, POSITION_SELECT_OPTIONS, POSITION_VALUE } from '@/page/workspaceSetting/constant';
import { MemberType } from '@/page/workspaceSetting/type';
import { defineSupportigtext } from '@/page/workspaceSetting/util';

import { Validate } from '@/shared/util/validate';

interface ProfileSettingProps extends MemberType {
  onWorkspaceDataChange: (key: string, value: string) => void;
  error: string;
  onErrorChange: (key: string, value: string) => void;
}

const ProfileSetting = ({ name, position, onWorkspaceDataChange, error, onErrorChange }: ProfileSettingProps) => {
  const ref = useOutsideClick<HTMLDivElement>(close);

  const handleNameChange = (value: string) => {
    if (Validate.validateLength(value, MAX_NAME_LENGTH) || Validate.isEmpty(value)) {
      onErrorChange('nicknameError', ERROR_NAME.VALIDATE);
    }

    if (!Validate.validateLength(value, MAX_NAME_LENGTH)) {
      onErrorChange('nicknameError', ERROR_NAME.OVER_LENGTH);
    }

    onWorkspaceDataChange('name', value);
  };

  return (
    <>
      <Text tag="body6">개인 프로필 관리</Text>
      <Flex styles={{ gap: '1.6rem', marginTop: '1.2rem', maxWidth: '68.8rem' }}>
        <Input
          value={name}
          supportingText={defineSupportigtext(error)}
          onChange={(event) => handleNameChange(event.target.value)}
          onClick={() => handleNameChange('')}
          placeholder="닉네임"
          isError={error !== ERROR_NAME.VALIDATE}
        />
        <Select
          aria-label={`선택된 직책: ${POSITION_SELECT_OPTIONS[0].value}`}
          variant={'disabled'}
          ref={ref}
          placeholder={POSITION_VALUE[position]}
          defaultValue={POSITION_VALUE[position]}
          options={POSITION_SELECT_OPTIONS}
        />
      </Flex>
    </>
  );
};

export default ProfileSetting;
