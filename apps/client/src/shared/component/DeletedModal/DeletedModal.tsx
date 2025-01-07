import { Flex, Text, useToastAction } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { usePositionData } from '@/page/workspaceSetting/hook/api/queries';

import { $api } from '@/shared/api/client';
import { queryClient } from '@/shared/api/queryClient';
import { contentStyle, titleStyle } from '@/shared/component/DeletedModal/DeletedModal.style';
import { Modal } from '@/shared/component/Modal';
import { DELETE_EXECUTIVE, DELETE_WORKSPACE } from '@/shared/constant';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';

const DeletedModal = () => {
  const navigate = useNavigate();
  const teamId = useInitializeTeamId();

  const { createToast } = useToastAction();

  const closeModal = useCloseModal();

  const { mutate: deleteTeam } = $api.useMutation('delete', '/api/v1/teams/{teamId}');
  const { data: positionData } = usePositionData();
  const position = positionData?.data?.position;

  // const { mutate: deleteTeamMember} = $api.useMutation('delete', '/api/v1/team-member/teams/{teamId}/members/{kickOutMemberId}')

  const handleDelete = () => {
    if (position === 'ADMIN') {
      deleteTeam(
        { params: { path: { teamId } } },
        {
          onSuccess: () => {
            localStorage.removeItem('teamId');

            queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/members/teams'] });

            closeModal();
            navigate(PATH.DASHBOARD);
          },
          onError: () => {
            createToast('워크스페이스 삭제 과정에서 오류가 발생했습니다', 'error');
          },
        }
      );
    }
  };

  return (
    <>
      <Modal.Body>
        <Flex styles={{ width: '100%', direction: 'column', gap: '2.8rem' }}>
          <Text tag="body4" css={titleStyle}>
            {position === 'ADMIN' ? DELETE_WORKSPACE.TITLE : DELETE_EXECUTIVE.TITLE}
          </Text>
          <Text tag="body7" css={contentStyle}>
            {position === 'ADMIN' ? DELETE_WORKSPACE.CONTENT : DELETE_EXECUTIVE.CONTENT}
          </Text>
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType="deleted" buttonClick={handleDelete} closeModal={closeModal} />
    </>
  );
};

export default DeletedModal;
