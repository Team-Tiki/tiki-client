import { CommandButton, Flex, Input, Text, scrollStyle, useToastAction } from '@tiki/ui';

import { useState } from 'react';

import { $api } from '@/shared/api/client';
import { emptyStyle, inputWrapperStyle } from '@/shared/component/InviteModal/InviteModal.style';
import MemberItem from '@/shared/component/InviteModal/Member/MemberItem';
import { Modal } from '@/shared/component/Modal';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';

const InviteModal = () => {
  const [inputValue, setInputValue] = useState('');
  const [inviteList, setInviteList] = useState<string[]>([]);

  const isDisabled = inviteList.length === 0;

  const { createToast } = useToastAction();

  const closeModal = useCloseModal();

  const teamId = useInitializeTeamId();
  const { mutate } = $api.useMutation('post', '/api/v1/email/invitation/team/{teamId}');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddInvite = () => {
    if (inputValue.trim() && !inviteList.includes(inputValue.trim())) {
      setInviteList((prevList) => {
        const updatedList = [...prevList, inputValue.trim()];

        updatedList.forEach((email) => {
          mutate(
            { params: { path: { teamId } }, body: { email: email } },
            {
              onSuccess: () => {
                createToast('메일 전송에 성공했습니다.', 'success');
              },
              onError: (error) => {
                createToast(`${error.message}`, 'error');
                setInviteList((prevList) => prevList.filter((item) => item !== email));
              },
            }
          );
        });

        return updatedList;
      });
      setInputValue('');
    }
  };
  const handleDeleteInvite = (email: string) => {
    setInviteList(inviteList.filter((item) => item !== email));
  };

  return (
    <>
      <Modal.Header step={1} />
      <Modal.Body>
        <Flex styles={{ direction: 'column', gap: '2rem', width: '100%', paddingTop: '2rem' }}>
          <Flex styles={{ direction: 'row', align: 'center', gap: '0.4rem', width: '100%' }}>
            <Input
              placeholder="초대할 팀원의 학교 웹메일"
              value={inputValue}
              onChange={handleInputChange}
              css={inputWrapperStyle}
            />
            <CommandButton
              variant="outline"
              commandKey="Enter"
              isCommand={false}
              onClick={handleAddInvite}
              disabled={!inputValue}
              css={{ width: '12rem', height: '4rem', padding: '1rem' }}>
              추가
            </CommandButton>
          </Flex>

          <div css={{ scrollStyle, width: '100%' }}>
            {inviteList.length > 0 ? (
              inviteList.map((email) => (
                <MemberItem key={email} title={email} onDelete={() => handleDeleteInvite(email)} />
              ))
            ) : (
              <Text tag="body8" css={emptyStyle}>
                초대된 팀원이 없습니다.
              </Text>
            )}
          </div>
        </Flex>
      </Modal.Body>
      <Modal.Footer step={1} type="invite" onClick={closeModal} disabled={isDisabled} onClose={closeModal} />
    </>
  );
};

export default InviteModal;
