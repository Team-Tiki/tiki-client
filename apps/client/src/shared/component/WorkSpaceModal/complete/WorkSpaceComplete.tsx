import { useQueryClient } from '@tanstack/react-query';

import completePng from '@/common/asset/img/workspace_complete.png';
import complete from '@/common/asset/img/workspace_complete.webp';

import { $api } from '@/shared/api/client';
import { Modal } from '@/shared/component/Modal';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';
import { useCloseModal } from '@/shared/store/modal';

const WorkSpaceComplete = () => {
  const queryClient = useQueryClient();

  const closeModal = useCloseModal();

  const { formData } = useWorkSpaceContext();
  const { mutate: postTeamMutate } = $api.useMutation('post', '/api/v1/teams');

  const handleSave = () => {
    postTeamMutate(
      {
        body: {
          name: formData.name,
          category: formData.category,
          iconImageUrl: formData.fileUrlData,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['get', '/api/v1/members/teams'],
          });

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
          <picture>
            <source srcSet={complete} />
            <img
              css={{ width: '30rem', height: '30rem', objectFit: 'cover' }}
              src={completePng}
              alt="워크 스페이스 생성 완료"
            />
          </picture>
        </div>
      </Modal.Body>
      <Modal.Footer step={1} type="create-workspace" onClick={handleSave} disabled={false} />
    </>
  );
};

export default WorkSpaceComplete;
