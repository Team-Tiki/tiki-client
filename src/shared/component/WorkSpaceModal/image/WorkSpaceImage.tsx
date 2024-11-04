import TeamProfileAdd from '@/common/asset/svg/ic_team_profile_add.svg?react';
import TeamProfileDelete from '@/common/asset/svg/ic_team_profile_delete.svg?react';
import Label from '@/common/component/Label/Label';
import { Modal } from '@/common/component/Modal';

import {
  imageAddStyle,
  imageBoxStyle,
  imageDeleteStyle,
} from '@/shared/component/WorkSpaceModal/image/WorkSpaceImage.style';
import useImageUpload from '@/shared/component/WorkSpaceModal/image/hook/useImageUpload';
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

  const isButtonActive = !!fileURL;

  return (
    <>
      <Modal.Header step={3} totalSteps={4} />
      <Modal.Body>
        <div css={[{ cursor: 'pointer' }, imageBoxStyle]}>
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
      </Modal.Body>
      <Modal.Footer step={3} buttonClick={handleSave} isButtonActive={isButtonActive} />
    </>
  );
};

export default WorkSpaceImage;
