import { useState } from 'react';

import SearchIcon from '@/common/asset/svg/ic_search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import { Modal } from '@/common/component/Modal';
import Text from '@/common/component/Text/Text';

import { ACITIVITY_TAG_DATA } from '@/shared/constant';
import { useCloseModal } from '@/shared/store/modal';

import { scrollStyle, textStyle } from '../InviteModal/InviteModal.style';
import ActivityTagItem from './ActivityTagItem/ActivityTagItem';

const ActivityTagModal = () => {
  const [inputValue, setInputValue] = useState('');

  const [activityTags, setActivityTags] = useState(() => [...ACITIVITY_TAG_DATA]);

  const closeModal = useCloseModal();

  /* 드롭다운 검색 기능 추가할때 버튼활성화 조건 바꾸기! */
  const isButtonActive = inputValue.trim().length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeleteActivityTag = (id: number) => {
    setActivityTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
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
            {activityTags.length > 0 ? (
              activityTags.map((data) => (
                <ActivityTagItem
                  key={data.id}
                  title={data.title}
                  date={data.date}
                  tag={data.tag}
                  color={data.color}
                  onDelete={() => handleDeleteActivityTag(data.id)}
                />
              ))
            ) : (
              <Text tag="body8" css={textStyle}>
                태그된 활동이 없습니다.
              </Text>
            )}
          </div>
        </Flex>
      </Modal.Body>
      <Modal.Footer buttonClick={closeModal} isButtonActive={!isButtonActive} />
    </>
  );
};

export default ActivityTagModal;
