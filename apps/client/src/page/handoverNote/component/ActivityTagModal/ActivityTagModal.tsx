import { IcSearch } from '@tiki/icon';
import { Flex, Input, Text } from '@tiki/ui';

import { useState } from 'react';

import ActivityTagItem from '@/page/handoverNote/component/ActivityTagModal/ActivityTagItem/ActivityTagItem';

import { $api } from '@/shared/api/client';
import { scrollStyle, textStyle } from '@/shared/component/InviteModal/InviteModal.style';
import { Modal } from '@/shared/component/Modal';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';

const ActivityTagModal = () => {
  const closeModal = useCloseModal();
  const teamId = useInitializeTeamId();

  const { data } = $api.useSuspenseQuery('get', '/api/v1/teams/{teamId}/time-block/all', {
    params: {
      path: { teamId },
    },
  });

  console.log(data);

  const [activityTags, setActivityTags] = useState(data?.data?.tImeBlockTaggingResponses || []);
  const [inputValue, setInputValue] = useState('');

  /* 드롭다운 검색 기능 추가할때 버튼활성화 조건 바꾸기! */
  const isButtonActive = inputValue.trim().length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeleteActivityTag = (id: number) => {
    setActivityTags((prevTags) => prevTags.filter((tag) => tag.timeBlockId !== id));
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
            {activityTags.length > 0 ? (
              activityTags.map((data) => (
                <ActivityTagItem
                  key={data.timeBlockId}
                  title={data.name}
                  date={data.startDate}
                  tag={data.type}
                  color={data.color}
                  onDelete={() => handleDeleteActivityTag(data.timeBlockId)}
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
      <Modal.Footer contentType="activity-tag" buttonClick={closeModal} isButtonActive={!isButtonActive} />
    </>
  );
};

export default ActivityTagModal;
