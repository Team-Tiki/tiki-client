import completePng from '@/common/asset/img/workspace_complete.png';
import complete from '@/common/asset/img/workspace_complete.webp';

import { Modal } from '@/shared/component/Modal';
import { usePostTeamMutation } from '@/shared/hook/api/usePostTeamMutation';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';
import { useCloseModal } from '@/shared/store/modal';

const WorkSpaceComplete = () => {
  const closeModal = useCloseModal();

  const { formData } = useWorkSpaceContext();
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
          closeModal();
        },
      }
    );
  };

  return (
    <>
      <Modal.Header step={5} totalSteps={5} />
      <Modal.Body>
        <picture>
          <source srcSet={complete} />
          <img
            css={{ width: '30rem', height: '30rem', objectFit: 'cover' }}
            src={completePng}
            alt="워크 스페이스 생성 완료"
          />
        </picture>
      </Modal.Body>
      <Modal.Footer step={1} contentType="create-workspace" buttonClick={handleSave} />
    </>
  );
};

export default WorkSpaceComplete;
