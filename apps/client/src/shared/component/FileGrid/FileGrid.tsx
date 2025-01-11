import { IcThreeDots } from '@tiki/icon';
import { CheckBox, Flex, Heading, MenuItem, MenuList, MenuRoot, Text, useToastAction } from '@tiki/ui';
import { useOverlay } from '@tiki/utils';

import { useRef } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { OPTION_ICON, getIconByType } from '@/shared/component/FileGrid/icon';
import {
  cardStyle,
  iconWrapperStyle,
  nameStyle,
  optionListStyle,
  optionTextStyle,
  textStyle,
} from '@/shared/component/FileGrid/index.style';
import { CAUTION } from '@/shared/constant';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';
import { File } from '@/shared/type/file';
import { getFileVolume } from '@/shared/util/file';

export type FileGridProps = components['schemas']['DocumentGetResponse'] & {
  variant?: 'primary' | 'secondary';
  /** API 명세에 따라 달라질 수 있음 + 추후 삭제 */
  type: File;
  isSelectable?: boolean;
  onSelect?: () => void;
  isSelected?: boolean;
  isDeleted?: boolean;

  /**
   * [TODO]
   * onDownLoad
   * onDelete
   * onShowNote
   */
};

const FileGrid = ({
  documentId,
  name,
  capacity,
  type,
  variant = 'primary',
  isSelectable = false,
  onSelect,
  isSelected = false,
  isDeleted = false,
}: FileGridProps) => {
  const { isOpen, close, toggle } = useOverlay();

  const optionRef = useRef<HTMLDivElement | null>(null);

  const teamId = useInitializeTeamId();

  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const queryClient = useQueryClient();

  const { createToast } = useToastAction();

  const { mutate } = $api.useMutation('delete', '/api/v1/teams/{teamId}/documents');

  const checkDropdownPosition = () => {
    if (!optionRef.current) return false;

    const { y } = optionRef.current.getBoundingClientRect();

    /** y 위치 + 드롭다운 높이 + 드롭다운 transformY > 뷰포트 높이 - 뷰포트 패딩바텀 */
    return y + 118 + 20 < document.documentElement.clientHeight - 48;
  };

  const handleDeleteFile = () => {
    openModal('caution', {
      infoText: CAUTION.DELETE_FILE.INFO_TEXT,
      content: CAUTION.DELETE_FILE.CONTENT,
      desc: CAUTION.DELETE_FILE.DESC,
      onClick: () => {
        mutate(
          {
            params: {
              path: { teamId },
              query: { documentId: [documentId] },
            },
          },
          {
            onSuccess: () => {
              closeModal();

              createToast('파일을 성공적으로 삭제했습니다.', 'success');

              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/drive'] });
            },
            onError: () => {
              createToast('파일을 삭제하는 도중 오류가 발생했습니다.', 'error');
            },
          }
        );
      },
    });
  };

  return (
    <article css={cardStyle(variant !== 'primary')}>
      {isSelectable && (
        <CheckBox css={{ position: 'absolute', right: 20 }} isChecked={isSelected} onChange={() => onSelect?.()} />
      )}
      <div css={iconWrapperStyle(variant !== 'primary')}>{getIconByType(type)}</div>
      <Flex
        styles={{
          direction: 'column',
          gap: variant === 'primary' ? '1.2rem' : '0.8rem',
        }}>
        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
          <Heading css={nameStyle} tag="H3">
            {name}
          </Heading>
          {variant === 'primary' && (
            <MenuRoot onClose={close}>
              <div ref={optionRef}>
                {!isDeleted && <IcThreeDots onClick={toggle} css={{ cursor: 'pointer' }} width={16} height={16} />}
              </div>

              <MenuList css={optionListStyle(checkDropdownPosition())} isOpen={isOpen}>
                <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.download} onSelect={() => {}}>
                  파일 다운로드
                </MenuItem>
                <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.deleted} onSelect={handleDeleteFile}>
                  휴지통으로 이동
                </MenuItem>
                <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.handover} onSelect={() => {}}>
                  인수인계 노트 보기
                </MenuItem>
              </MenuList>
            </MenuRoot>
          )}
        </Flex>

        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
          <Text tag="body8" css={textStyle}>
            {type} 문서
          </Text>
          <Text tag="body8" css={textStyle}>
            {getFileVolume(capacity ?? 0)}
          </Text>
        </Flex>
      </Flex>
    </article>
  );
};

export default FileGrid;
