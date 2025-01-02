import { IcSearch } from '@tiki/icon';
import { Flex, Input, Text } from '@tiki/ui';

import { useState } from 'react';

import { scrollStyle, textStyle } from '@/shared/component/InviteModal/InviteModal.style';
import MemberTagItem from '@/shared/component/MemberTagModal/MemberTagItem/MemberTagItem';
import { Modal } from '@/shared/component/Modal';
import { MEMBER_DATA } from '@/shared/constant';
import { useCloseModal } from '@/shared/store/modal';

const MemberTagModal = () => {
  const [inputValue, setInputValue] = useState('');
  const [memberTagList, setMemberTagList] = useState(MEMBER_DATA.map((member) => ({ ...member })));

  const closeModal = useCloseModal();

  /* 드롭다운 검색 기능 구현할때 버튼활성화 조건 변경하기 */
  const isButtonActive = inputValue.trim().length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeleteMemberTag = (email: string) => {
    setMemberTagList(memberTagList.filter((item) => item.email !== email));
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex styles={{ direction: 'column', gap: '2rem', width: '100%' }}>
          <Input
            placeholder="search"
            LeftIcon={<IcSearch width={12} height={12} />}
            value={inputValue}
            onChange={handleInputChange}
          />
          <div css={scrollStyle}>
            {memberTagList.length > 0 ? (
              memberTagList.map((data) => (
                <MemberTagItem
                  key={data.email}
                  name={data.name}
                  email={data.email}
                  profileImg={data.profileUrl}
                  onDelete={() => handleDeleteMemberTag(data.email)}
                />
              ))
            ) : (
              <Text tag="body8" css={textStyle}>
                태그된 팀원이 없습니다.
              </Text>
            )}
          </div>
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType="member-tag" buttonClick={closeModal} isButtonActive={!isButtonActive} />
    </>
  );
};

export default MemberTagModal;
