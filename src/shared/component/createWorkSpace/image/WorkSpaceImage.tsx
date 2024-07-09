import { useRef, useState } from 'react';

import TeamProfileAdd from '@/common/asset/svg/team-profile-add.svg?react';
import TeamProfileDelete from '@/common/asset/svg/team-profile-delete.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import {
  buttonCompleteStyle,
  imageAddStyle,
  imageBoxStyle,
  imageDeleteStyle,
} from '@/shared/component/createWorkSpace/image/WorkSpaceImage.style';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { sectionStyle } from '@/shared/component/createWorkSpace/name/WorkSpaceName.style';

interface WorkSpaceImageProps {
  onNext: () => void;
}

const WorkSpaceImage = ({ onNext }: WorkSpaceImageProps) => {
  const [fileURL, setFileURL] = useState<string>('');
  const imgUploadInput = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFileURL = URL.createObjectURL(event.target.files[0]);
      setFileURL(newFileURL);
    }
  };

  const handleImageRemove = (): void => {
    URL.revokeObjectURL(fileURL);
    setFileURL('');
  };

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      <WorkSapceInfo
        step={3}
        title="동아리 프로필 이미지 등록"
        info="우리 동아리의 프로필에 표시할 이미지를 등록해주세요"
      />
      <div css={imageBoxStyle}>
        {fileURL ? (
          <img src={fileURL} alt="프로필 이미지" css={imageAddStyle} />
        ) : (
          <label htmlFor="imgUploadInput" css={imageAddStyle}>
            <TeamProfileAdd css={{ width: '20rem', height: '20rem' }} />
          </label>
        )}
        {fileURL && <TeamProfileDelete css={imageDeleteStyle} onClick={handleImageRemove} />}
      </div>
      <input
        id="imgUploadInput"
        css={{ display: 'none' }}
        type="file"
        accept="image/*"
        ref={imgUploadInput}
        onChange={handleImageChange}
      />
      <Button css={buttonCompleteStyle} variant="primary" size="medium" onClick={onNext}>
        완료
      </Button>
    </Flex>
  );
};

export default WorkSpaceImage;
