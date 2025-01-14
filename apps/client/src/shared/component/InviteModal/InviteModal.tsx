import { CommandButton, Flex, Input, Text } from '@tiki/ui';

import { useState } from 'react';

import { inputWrapperStyle, scrollStyle, textStyle } from '@/shared/component/InviteModal/InviteModal.style';
import MemberItem from '@/shared/component/InviteModal/Member/MemberItem';
import { Modal } from '@/shared/component/Modal';
import { useFunnel } from '@/shared/hook/common/useFunnel';

const InviteModal = ({ step }: { step: number }) => {
  const [inputValue, setInputValue] = useState('');
  const [inviteList, setInviteList] = useState<string[]>([]);

  const isButtonActive = inputValue.trim().length > 0;

  const { nextStep } = useFunnel();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddInvite = () => {
    if (inputValue.trim() && !inviteList.includes(inputValue)) {
      setInviteList([...inviteList, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteInvite = (email: string) => {
    setInviteList(inviteList.filter((item) => item !== email));
  };

  return (
    <>
      <Modal.Header step={step} />
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
              disabled={!isButtonActive}
              isCommand={false}
              onClick={handleAddInvite}
              css={{ width: '12rem', height: '4rem' }}>
              추가
            </CommandButton>
          </Flex>

          <div css={scrollStyle}>
            {inviteList.length > 0 ? (
              inviteList.map((email) => (
                <MemberItem key={email} title={email} onDelete={() => handleDeleteInvite(email)} />
              ))
            ) : (
              <Text tag="body8" css={textStyle}>
                초대된 팀원이 없습니다.
              </Text>
            )}
          </div>
        </Flex>
      </Modal.Body>
      <Modal.Footer
        contentType="invite"
        buttonClick={() => {
          nextStep();
        }}
        isButtonActive={!isButtonActive}
      />
    </>
  );
};

export default InviteModal;
