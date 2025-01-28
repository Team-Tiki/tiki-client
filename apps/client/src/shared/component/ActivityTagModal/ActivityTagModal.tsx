import { IcSearch } from '@tiki/icon';
import { DropdownItem, DropdownList, DropdownRoot, DropdownTrigger, Flex, Input, scrollStyle } from '@tiki/ui';
import { useDebounce } from '@tiki/utils';

import { useState } from 'react';

import { $api } from '@/shared/api/client';
import ActivityTagItem from '@/shared/component/ActivityTagModal/ActivityTagItem/ActivityTagItem';
import { tagListStyle } from '@/shared/component/ActivityTagModal/ActivityTagModal.style';
import {
  emptyStyle,
  itemStyle,
  notFoundStyle,
  overlayStyle,
} from '@/shared/component/FileImportModal/FileImportModal.style';
import { Modal } from '@/shared/component/Modal';
import { TAG } from '@/shared/constant';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { ActivityTagModalData, useCloseModal, useModalData } from '@/shared/store/modal';
import { formatDateToDots } from '@/shared/util/date';

export type ActivityTag = {
  timeBlockId: number;
  name: string;
  type: 'MEETING' | 'RECRUITING' | 'STUDY' | 'EVENT' | 'NOTICE' | 'ETC';
  color: string;
  startDate: string;
};

const ActivityTagModal = () => {
  const modalData = useModalData() as ActivityTagModalData;

  const teamId = useInitializeTeamId();

  const { data } = $api.useSuspenseQuery('get', '/api/v1/teams/{teamId}/time-block/all', {
    params: { path: { teamId } },
  });

  const [activityTags] = useState<ActivityTag[]>(data.data?.tImeBlockTaggingResponses || []);
  const [inputValue, setInputValue] = useState('');
  const [selectedTags, setSelectedTags] = useState<ActivityTag[]>(modalData.selectedTags || []);

  const closeModal = useCloseModal();

  const filterKeyword = useDebounce(inputValue, 300);

  const filteredTags = activityTags.filter(
    (tag) => tag.name.normalize('NFC').includes(filterKeyword.normalize('NFC')) && filterKeyword !== ''
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (timeblockId: number) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.timeBlockId !== timeblockId));
  };

  const handleSelect = (item: ActivityTag) => {
    const isSelected = selectedTags.some((tag) => tag.timeBlockId === item.timeBlockId);

    if (!isSelected) {
      setSelectedTags((prev) => [...prev, item]);
    }
  };

  console.log(selectedTags);

  const handleComplete = () => {
    modalData.onConfirm?.(selectedTags);

    closeModal();
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex
          styles={{
            direction: 'column',
            width: '100%',
            paddingTop: '2rem',
          }}>
          <DropdownRoot css={{ width: '100%' }}>
            <DropdownTrigger variant="input">
              <Input
                placeholder="search"
                LeftIcon={<IcSearch width={12} height={12} />}
                value={inputValue}
                onChange={handleInputChange}
              />
            </DropdownTrigger>
            <DropdownList css={[overlayStyle, scrollStyle]}>
              {filteredTags?.length === 0 ? (
                <DropdownItem css={notFoundStyle}>{TAG.NOT_FOUND}</DropdownItem>
              ) : (
                filteredTags?.map((tag) => (
                  <DropdownItem key={tag.timeBlockId} css={itemStyle} onSelect={() => handleSelect(tag)}>
                    <ActivityTagItem
                      key={tag.timeBlockId}
                      title={tag.name}
                      date={formatDateToDots(tag.startDate)}
                      tag={tag.type}
                      color={tag.color}
                      onDelete={() => handleDelete(tag.timeBlockId)}
                      isSearch
                    />
                  </DropdownItem>
                ))
              )}
            </DropdownList>
          </DropdownRoot>
          <Flex css={tagListStyle}>
            {selectedTags.length === 0 ? (
              <div css={emptyStyle}>{TAG.NO_CONNECTED_TAG}</div>
            ) : (
              selectedTags.map((tag) => (
                <Flex css={[scrollStyle, { width: '100%' }]} key={tag.timeBlockId}>
                  <ActivityTagItem
                    key={tag.timeBlockId}
                    title={tag.name}
                    date={formatDateToDots(tag.startDate)}
                    tag={tag.type}
                    color={tag.color}
                    onDelete={() => handleDelete(tag.timeBlockId)}
                  />
                </Flex>
              ))
            )}
          </Flex>
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType="activity-tag" buttonClick={handleComplete} closeModal={closeModal} />
    </>
  );
};

export default ActivityTagModal;
