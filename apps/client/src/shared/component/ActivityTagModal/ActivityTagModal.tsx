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
import { SEARCH_DELAY, TAG } from '@/shared/constant';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { ActivityTagModalData, useCloseModal, useModalData } from '@/shared/store/modal';
import { ActivityTag } from '@/shared/type/modal';
import { formatDateToDots } from '@/shared/util/date';

const ActivityTagModal = () => {
  const teamId = useInitializeTeamId();

  const modalData = useModalData() as ActivityTagModalData;
  const closeModal = useCloseModal();

  const { data } = $api.useSuspenseQuery('get', '/api/v1/teams/{teamId}/time-block/all', {
    params: { path: { teamId } },
  });

  const [activityTags] = useState<ActivityTag[]>(data.data?.tImeBlockTaggingResponses || []);
  const [inputValue, setInputValue] = useState('');
  const [selectedTags, setSelectedTags] = useState<ActivityTag[]>(modalData.selectedTags || []);

  const filterKeyword = useDebounce(inputValue, SEARCH_DELAY);

  const filteredTags = activityTags.filter(
    (tag) => tag.name.normalize('NFC').includes(filterKeyword.normalize('NFC')) && filterKeyword !== ''
  );

  const handleDelete = (timeblockId: number) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.timeBlockId !== timeblockId));
  };

  const handleSelect = (item: ActivityTag) => {
    const isSelected = selectedTags.some((tag) => tag.timeBlockId === item.timeBlockId);

    if (!isSelected) {
      setSelectedTags((prev) => [...prev, item]);
    }
  };

  const handleComplete = () => {
    modalData.onConfirm?.(selectedTags);
    setSelectedTags(selectedTags);

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
                onChange={(e) => setInputValue(e.target.value)}
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
          <Flex tag="ul" css={tagListStyle}>
            {selectedTags.length === 0 ? (
              <li css={emptyStyle}>{TAG.NO_CONNECTED_TAG}</li>
            ) : (
              selectedTags.map((tag) => (
                <Flex tag="li" css={[scrollStyle, { width: '100%' }]} key={tag.timeBlockId}>
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
      <Modal.Footer
        type="activity-tag"
        onClick={handleComplete}
        onClose={closeModal}
        disabled={selectedTags.length === 0}
      />
    </>
  );
};

export default ActivityTagModal;
