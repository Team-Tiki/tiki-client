import { IcTeamProfileAdd, IcTeamProfileDelete } from '@tiki/icon';
import { Label } from '@tiki/ui';

import { Modal } from '@/shared/component/Modal';
import {
  imageAddStyle,
  imageBoxStyle,
  imageDeleteStyle,
} from '@/shared/component/WorkSpaceModal/image/WorkSpaceImage.style';
import useImageUpload from '@/shared/component/WorkSpaceModal/image/hook/useImageUpload';
import { usePostTeamMutation } from '@/shared/hook/api/usePostTeamMutation';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

const WorkSpaceImage = () => {
  const { fileURL, imgUploadInput, handleImageChange, handleImageRemove } = useImageUpload();

  const { formData } = useWorkSpaceContext();
  const { nextStep } = useFunnel();

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
      </Modal.Body>
      <Modal.Footer step={3} contentType="create-workspace" buttonClick={handleSave} isButtonActive={isButtonActive} />
    </>
  );
};

export default WorkSpaceImage;
