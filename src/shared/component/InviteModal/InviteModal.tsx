import { useState } from 'react';

import CommandButton from '@/common/component/CommandButton/CommandButton';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import { Modal } from '@/common/component/Modal';
import Text from '@/common/component/Text/Text';

import { useCloseModal } from '@/shared/store/modal';

import InviteItem from './InviteItem/InviteItem';
import { inputWrapperStyle, scrollStyle, textStyle } from './InviteModal.style';

const InviteModal = () => {
  const [inputValue, setInputValue] = useState('');
  const [inviteList, setInviteList] = useState<string[]>([]);

  const closeModal = useCloseModal();

  const isButtonActive = inputValue.trim().length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddInvite = () => {
    if (inputValue.trim() && !inviteList.includes(inputValue)) {
      setInviteList([...inviteList, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isButtonActive) {
      handleAddInvite();
    }
  };

  const handleDeleteInvite = (email: string) => {
    setInviteList(inviteList.filter((item) => item !== email));
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex styles={{ direction: 'column', gap: '2rem', width: '100%' }}>
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
                <InviteItem key={email} title={email} onDelete={() => handleDeleteInvite(email)} />
              ))
            ) : (
              <Text tag="body8" css={textStyle}>
                초대된 팀원이 없습니다.
              </Text>
            )}
          </div>
        </Flex>
      </Modal.Body>
      <Modal.Footer buttonClick={closeModal} isButtonActive={!isButtonActive} />
    </>
  );
};

export default InviteModal;
