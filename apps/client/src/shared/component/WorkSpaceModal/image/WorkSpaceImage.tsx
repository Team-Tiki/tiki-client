import { IcTeamProfileAdd, IcTeamProfileDelete } from '@tiki/icon';
import { Button, Flex, Label } from '@tiki/ui';

import {
  buttonCompleteStyle,
  imageAddStyle,
  imageBoxStyle,
  imageDeleteStyle,
} from '@/shared/component/WorkSpaceModal/image/WorkSpaceImage.style';
import useImageUpload from '@/shared/component/WorkSpaceModal/image/hook/useImageUpload';
import WorkSapceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import { sectionStyle } from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';
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
      <div css={[{ cursor: 'pointer' }, imageBoxStyle]}>
        {fileURL ? (
          <img src={fileURL} alt="프로필 이미지" css={imageAddStyle} />
        ) : (
          <Label id="imgUploadInput" css={imageAddStyle}>
            <IcTeamProfileAdd width={200} height={200} />
          </Label>
        )}
        {fileURL && <IcTeamProfileDelete css={imageDeleteStyle} onClick={handleImageRemove} />}
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
