import { useQueryClient } from '@tanstack/react-query';

import { $api } from '@/shared/api/client';
import { Modal } from '@/shared/component/Modal';
import { IMAGE_PLACEHOLDER } from '@/shared/constant';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';
import { useCloseModal } from '@/shared/store/modal';

const WorkSpaceComplete = () => {
  const queryClient = useQueryClient();

  const closeModal = useCloseModal();

  const { formData } = useWorkSpaceContext();
  console.log(formData);
  const { mutate: postTeamMutate } = $api.useMutation('post', '/api/v1/teams');

  const handleSave = () => {
    postTeamMutate(
      {
        body: {
          name: formData.name,
          category: formData.category,
          iconImageKey: formData.fileKey,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/members/teams'] });

          closeModal();
        },
      }
    );
  };

  return (
    <>
      <Modal.Header step={4} totalSteps={4} />
      <Modal.Body>
        <div css={{ width: '100%', paddingTop: '2rem' }}>
          <img
            css={{ width: '33.6rem', height: '33.8rem', objectFit: 'cover' }}
            src={formData.fileUrl}
            onError={(e) => (e.currentTarget.src = IMAGE_PLACEHOLDER)}
            alt="워크 스페이스 생성 완료"
          />
        </div>
      </Modal.Body>
      <Modal.Footer step={4} type="create-workspace" onClick={handleSave} disabled={false} />
    </>
  );
};

export default WorkSpaceComplete;
