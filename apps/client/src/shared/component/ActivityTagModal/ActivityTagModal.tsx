import { IcSearch } from '@tiki/icon';
import { DropdownItem, DropdownList, DropdownRoot, Flex, Input, scrollStyle } from '@tiki/ui';
import { useDebounce, useOutsideClick, useOverlay } from '@tiki/utils';

import { useMemo, useState } from 'react';

import { $api } from '@/shared/api/client';
import ActivityTagItem from '@/shared/component/ActivityTagModal/ActivityTagItem/ActivityTagItem';
import { tagListStyle } from '@/shared/component/ActivityTagModal/ActivityTagModal.style';
import {
  emptyStyle,
  fileListStyle,
  itemStyle,
  notFoundStyle,
  overlayStyle,
} from '@/shared/component/FileImportModal/FileImportModal.style';
import { Modal } from '@/shared/component/Modal';
import { TAG } from '@/shared/constant';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';
import { formatDateToDots } from '@/shared/util/date';

type ActivityTag = {
  timeBlockId: number;
  name: string;
  type: 'MEETING' | 'RECRUITING' | 'STUDY' | 'EVENT' | 'NOTICE' | 'ETC';
  color: string;
  startDate: string;
};

const ActivityTagModal = () => {
  const teamId = useInitializeTeamId();

  const { data } = $api.useSuspenseQuery('get', '/api/v1/teams/{teamId}/time-block/all', {
    params: {
      path: { teamId },
    },
  });

  const [activityTags] = useState<ActivityTag[]>(data.data?.tImeBlockTaggingResponses || []);
  const [inputValue, setInputValue] = useState('');
  const [selectedTags, setSelectedTags] = useState<ActivityTag[]>([]);

  const closeModal = useCloseModal();

  const { isOpen, open, close } = useOverlay();
  const dropdownRef = useOutsideClick<HTMLDivElement>(close);

  const filterKeyword = useDebounce(inputValue, 500);
  const filteredTags = useMemo(
    () => activityTags.filter((tag) => tag.name.normalize('NFC').includes(filterKeyword.normalize('NFC'))),
    [activityTags, filterKeyword]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (timeblockId: number) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.timeBlockId !== timeblockId));
  };

  const handleSelect = (item: ActivityTag) => {
    const isSelected = selectedTags.some((tag) => tag.timeBlockId === item.timeBlockId); // ✅ 올바른 비교

    if (!isSelected) {
      setSelectedTags((prev) => [...prev, item]);
    }

    close();
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
          <Input
            placeholder="search"
            LeftIcon={<IcSearch width={12} height={12} />}
            onFocus={open}
            value={inputValue}
            onChange={handleInputChange}
          />
          <DropdownRoot css={{ width: '100%' }} ref={dropdownRef} role="listbox">
            <DropdownList css={[overlayStyle(isOpen), scrollStyle]} isOpen={isOpen}>
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
                    />
                  </DropdownItem>
                ))
              )}
            </DropdownList>
          </DropdownRoot>
          <div css={tagListStyle}>
            {selectedTags.length === 0 ? (
              <div css={emptyStyle}>{TAG.NO_CONNECTED_TAG}</div>
            ) : (
              selectedTags.map((tag) => (
                <div css={[scrollStyle, fileListStyle]} key={tag.timeBlockId}>
                  <ActivityTagItem
                    key={tag.timeBlockId}
                    title={tag.name}
                    date={formatDateToDots(tag.startDate)}
                    tag={tag.type}
                    color={tag.color}
                    onDelete={() => handleDelete(tag.timeBlockId)}
                  />
                </div>
              ))
            )}
          </div>
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType="activity-tag" buttonClick={closeModal} closeModal={closeModal} />
    </>
  );
};

export default ActivityTagModal;
