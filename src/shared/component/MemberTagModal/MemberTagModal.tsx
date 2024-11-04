import { useState } from 'react';

import SearchIcon from '@/common/asset/svg/ic_search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import { Modal } from '@/common/component/Modal';
import Text from '@/common/component/Text/Text';

import { MEMBER_DATA } from '@/shared/constant';
import { useCloseModal } from '@/shared/store/modal';

import { scrollStyle, textStyle } from '../InviteModal/InviteModal.style';
import MemberTagItem from './MemberTagItem/MemberTagItem';

const MemberTagModal = () => {
  const [inputValue, setInputValue] = useState('');
  const [memberTagList, setMemberTagList] = useState<string[]>([]);

  const closeModal = useCloseModal();

  /* 드롭다운 검색 기능 구현할때 버튼활성화 조건 변경하기 */
  const isButtonActive = inputValue.trim().length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeleteMemberTag = (email: string) => {
    setMemberTagList(memberTagList.filter((item) => item !== email));
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex styles={{ direction: 'column', gap: '2rem', width: '100%' }}>
          <Input
            placeholder="search"
            LeftIcon={<SearchIcon width={12} height={12} />}
            value={inputValue}
            onChange={handleInputChange}
          />
          <div css={scrollStyle}>
            {MEMBER_DATA.length > 0 ? (
              MEMBER_DATA.map((data) => (
                <MemberTagItem
                  key={data.name}
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
      <Modal.Footer buttonClick={closeModal} isButtonActive={!isButtonActive} />
    </>
  );
};

export default MemberTagModal;
