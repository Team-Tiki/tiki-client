import { IcSearch } from '@tiki/icon';
import { Flex, Input, Text } from '@tiki/ui';
import { useDebounce } from '@tiki/utils';

import { useMemo, useState } from 'react';

import { $api } from '@/shared/api/client';
import ActivityTagItem from '@/shared/component/ActivityTagModal/ActivityTagItem/ActivityTagItem';
import { scrollStyle, textStyle } from '@/shared/component/InviteModal/InviteModal.style';
import { Modal } from '@/shared/component/Modal';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';
import { formatDateToDots } from '@/shared/util/date';

const ActivityTagModal = () => {
  const closeModal = useCloseModal();
  const teamId = useInitializeTeamId();

  const { data } = $api.useSuspenseQuery('get', '/api/v1/teams/{teamId}/time-block/all', {
    params: {
      path: { teamId },
    },
  });

  const [activityTags, setActivityTags] = useState(data.data?.tImeBlockTaggingResponses || []);
  const [inputValue, setInputValue] = useState('');

  const filterKeyword = useDebounce(inputValue, 500);
  const filteredFiles = useMemo(
    () => activityTags.filter((tag) => tag.name.normalize('NFC').includes(filterKeyword.normalize('NFC'))),
    [activityTags, filterKeyword]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeleteActivityTag = (e: React.MouseEvent, id: number) => {
    setActivityTags((prevTags) => prevTags.filter((tag) => tag.timeBlockId !== id));
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex
          styles={{
            direction: 'column',
            gap: '2rem',
            width: '100%',
            paddingTop: '2rem',
          }}>
          <Input
            placeholder="search"
            LeftIcon={<IcSearch width={12} height={12} />}
            value={inputValue}
            onChange={handleInputChange}
          />
          <div css={scrollStyle}>
            {activityTags.length > 0 ? (
              filteredFiles?.map((data) => (
                <ActivityTagItem
                  key={data.timeBlockId}
                  title={data.name}
                  date={formatDateToDots(data.startDate)}
                  tag={data.type}
                  color={data.color}
                  onDelete={(e) => handleDeleteActivityTag(e, data.timeBlockId)}
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
      <Modal.Footer contentType="activity-tag" buttonClick={closeModal} closeModal={closeModal} />
    </>
  );
};

export default ActivityTagModal;
