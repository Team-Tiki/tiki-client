import TeamProfileAdd from '@/common/asset/svg/ic_team_profile_add.svg?react';
import TeamProfileDelete from '@/common/asset/svg/ic_team_profile_delete.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Label from '@/common/component/Label/Label';

import {
  buttonCompleteStyle,
  imageAddStyle,
  imageBoxStyle,
  imageDeleteStyle,
} from '@/shared/component/workSpaceModal/image/WorkSpaceImage.style';
import useImageUpload from '@/shared/component/workSpaceModal/image/hook/useImageUpload';
import WorkSapceInfo from '@/shared/component/workSpaceModal/info/WorkSpaceInfo';
import { sectionStyle } from '@/shared/component/workSpaceModal/name/WorkSpaceName.style';
import { usePostTeamMutation } from '@/shared/hook/api/usePostTeamMutation';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

interface WorkSpaceImageProps {
  isVisible: boolean;
}

const WorkSpaceImage = ({ isVisible }: WorkSpaceImageProps) => {
  const { fileURL, imgUploadInput, handleImageChange, handleImageRemove } = useImageUpload();
  const { nextStep, formData } = useWorkSpaceContext();
  const { mutate: postTeamMutate } = usePostTeamMutation();

  const handleSave = () => {
    postTeamMutate(
      {
        name: formData.name,
        category: formData.category,
        iconImageUrl: formData.fileUrlData,
      },
      {
        onSuccess: async () => {
          nextStep();
        },
      }
    );
  };

  if (!isVisible) return null;

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      <WorkSapceInfo
        step="image"
        title="동아리 프로필 이미지 등록"
        info="우리 동아리의 프로필에 표시할 이미지를 등록해주세요"
      />
      <div css={imageBoxStyle}>
        {fileURL ? (
          <img src={fileURL} alt="프로필 이미지" css={imageAddStyle} />
        ) : (
          <Label id="imgUploadInput" css={imageAddStyle}>
            <TeamProfileAdd width={200} height={200} />
          </Label>
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
      <Button css={buttonCompleteStyle} variant="primary" size="medium" onClick={handleSave}>
        완료
      </Button>
    </Flex>
  );
};

export default WorkSpaceImage;
