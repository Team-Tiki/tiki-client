import { IcTeamProfileAdd, IcTeamProfileDelete } from '@tiki/icon';
import { Flex, Label } from '@tiki/ui';

import { Modal } from '@/shared/component/Modal';
import {
  imageAddStyle,
  imageBoxStyle,
  imageDeleteStyle,
} from '@/shared/component/WorkSpaceModal/image/WorkSpaceImage.style';
import useImageUpload from '@/shared/component/WorkSpaceModal/image/hook/useImageUpload';
import { useFunnel } from '@/shared/hook/common/useFunnel';

const WorkSpaceImage = () => {
  const { fileURL, imgUploadInput, handleImageChange, handleImageRemove } = useImageUpload();

  const { nextStep } = useFunnel();

  const isButtonActive = !!fileURL;

  return (
    <>
      <Modal.Header step={3} totalSteps={4} />
      <Modal.Body>
        <Flex styles={{ width: '100%', paddingTop: '2rem', justify: 'center' }}>
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
        </Flex>
      </Modal.Body>
      <Modal.Footer
        step={3}
        contentType="create-workspace"
        buttonClick={() => nextStep()}
        isButtonActive={isButtonActive}
      />
    </>
  );
};

export default WorkSpaceImage;
