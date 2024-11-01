import { css } from '@emotion/react';

import completePng from '@/common/asset/img/workspace_complete.png';
import complete from '@/common/asset/img/workspace_complete.webp';
import Flex from '@/common/component/Flex/Flex';
import { Modal } from '@/common/component/Modal';

import WorkSapceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import { sectionStyle } from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';
import { useCloseModal } from '@/shared/store/modal';

interface WorkSpaceCompleteProps {
  isVisible: boolean;
}

const WorkSpaceComplete = ({ isVisible }: WorkSpaceCompleteProps) => {
  if (!isVisible) return null;

  const closeModal = useCloseModal();

  return (
    <>
      <Modal.Header step={4} totalSteps={4} />
      <Modal.Body>
        <picture>
          <source srcSet={complete} />
          <img css={imgStyle} src={completePng} alt="워크 스페이스 완료 이미지" />
        </picture>
      </Modal.Body>
      <Modal.Footer step={1} buttonClick={closeModal} />
    </>
  );
};

export default WorkSpaceComplete;

export const imgStyle = css({
  width: '30rem',
  height: '30rem',

  objectFit: 'cover',
});
